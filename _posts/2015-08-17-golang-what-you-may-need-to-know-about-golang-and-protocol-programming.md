---
categories: ""
layout: post
splash: ""
tags: 
  - "null"
published: true
title: "Golang-Seven weeks Seven tips in Golang for Message protocol"
---



## 为什么选型最后确定了Golang

Golang是一门设计很“简约”的语言（尤其与其竞争对手c++相比），编译强类型语言+运行时垃圾回收，没有内建繁芜的函数式特性，总的来说，它适用的场景从最火热的几个杀手级项目就可以看出一些端倪了。

docker、etcd、raft、nsq，尽管go并不是万金油，但是作为一门系统级语言，简单的指针操作，原生的gc与并发（Concurrency）支持，拥有编译时类型校验与安全的内存模型，无不使得这个小地鼠（Gopher）显得又Q又犀利。

而STRIKE team，~~在饱尝Enigmail中使用JavaScript进行安全应用开发的痛苦体验后~~，选择Go作为隐私消息协议OTR3的开发平台，如果你想了解OTR3本身请参考[repo](https://github.com/twstrike/otr3)，是看中了Go下面几点特性：
- 性能接近C语言
- 内存安全，强类型
- 系统与网络层的大量应用
- 开发上手快，容易保证代码质量
- 作为有gc同时又能操作指针的语言，福祸参半

## 说这么多，那到底我需要知道什么？

### Read FAQ before start

一些常见问题，在golang的[FAQ](https://golang.org/doc/faq)中已经被解释过了，尤其是为何没有继承多态、为何没有overloading，为何maps不支持slice的key等等。

下面就谈谈这七周开发中总结的几个拙见。

### Refactor GoPath first

非常多的go项目，并没有很好地组织成best structure，在项目的初期，我们定义了独立的GOPATH环境变量，把项目和全局gopath分离开来，这样的简单方式给维护多个引用package带来了一些麻烦，由于OTR3是一个面向otr协议的version 3实现，我们需要额外实现一个compat package，无法通过直接修改workspace来实时测试新的功能，必须push到master分支才能解决外部依赖：

简言之：coding -> test -> **push** -> test exteral applications

这样的开发流程，在push环节中被大大限制住了，而对于这样的情况，单纯倚靠symbol link来组织多个代码库又显得非常脏，所以我们打算在接下来的开发中采用godeps解决vendor依赖。

GoDeps可以将workspace与test vendor分离开来，并且提供了类似ruby下bundle的依赖环境工具。

通过`godep save ./...`可以在你的目录下生成如下结构的Godeps文件夹，其中Godeps可以帮助你跟踪依赖的改变情况，同时可以使用`godep go test ./...`来跑测试。

```
Godeps
├── Godeps.json
├── Readme
└── _workspace
```

### Imports and Exports

由于Golang简约设计的原则限制，一个松耦合简单API的package应当在初期就设计好，否则在项目后期大量的Exported function会导致难以判断接口的必要性，介于compat package的存在，我们不得不做出了一些妥协。但是由于otr是一个协议lib而非app，严格地设计接口是非常有必要且必须先行考虑的事情。

Golint和GoDoc可以作为接口审查的工具，通过阅读自动生成的GoDoc就可以检查接口暴露的情况，例如[compat](https://godoc.org/github.com/twstrike/otr3/compat),[otr3](https://godoc.org/github.com/twstrike/otr3)比较两份文档的export接口数量，以及是否有type并不需要暴露到包外，都可以直观地阅读出来。

### Embedding abuse

Embedding是个经常被误解的特性，举个OTR3中的现实例子
原本的Context拥有三层embedding，

```
type Coversation struct{
    AKEContext
    SMPContext
}
type AKEContext struct{
	version
    ...
}
type SMPContext struct{
	...
}
```

或许你会觉得在使用方面，这段代码并没有什么问题，但事实上当你无法阻止开发中类型增加，一旦产生了歧义和循环调用，事情就变得复杂起来了，例如你需要令SMPContext也拥有一个独立的version，将原本version的相关调用与新的version属性区分开来将会变成一个痛苦的过程。

重构后，使用显性的调用，尽管增加了代码长度，但是却消除了歧义性：

```
type Coversation struct{
    akeContext AKEContext
    smpContext SMPContext
}
type AKEContext struct{
	version version
	Coversation *Coversation
    ...
}
type SMPContext struct{
	Coversation *Coversation
    ...
}
```

### Take care of pointer copy

在Java中你或许已经养成了习惯，每个参数都会被作为引用而传入，并且使用段首的final进行拷贝，那么在golang中，你就需要换一个思路看待这个问题了，一段数组或是一个结构，都是以拷贝传入的，而指针或是slice都可以作为参数传入，或是用作右值。

```
var arr []byte
foo(arr)
bar(arr[:])
```

看似相同，但前者是immutable后者是mutable的函数调用。
在OTR3中，我们需要实现一个wipe out特性，确保内存会被清空且释放，于是就有了下面的代码：

```
type foo struct {
    bs []byte
}

func zeroes(n int) []byte {
    return make([]byte, n)
}

func wipeBytes(b []byte) {
    copy(b, zeroes(len(b)))
}


func main() {
    a := foo{bs: []byte{0x01, 0x02}}
    b := a.bs
    wipeBytes(b)
    fmt.Println(b)    //b == []byte{}
    fmt.Println(a.bs) //a.bs == []byte{}
}
```

如果你不希望释放对象a内的数据，那么这里的`b := a.bs`就应该替换为`b:=make([]byte,len(a.bs)); copy(b[:],a.bs)`

另外每次进行传指针操作后，dereference也需要一定开销，因此对于大小对象的传参，从性能优化的角度出发，了解pointer的运作方式是非常必要的。

### Goroutines and CSP

Goroutine是golang提供的IOC channel，也可以称作一种implicitly coroutine，在runtime中用来替代多线程异步编程中繁琐的同步机制。

CSP的原始模型：Python的coroutine以及Erlang的process，都是映射到对应的1:1轻量进程(或线程)中，而Golang中的goroutine则可以被导向至任何一个channel被调用的地方，例如你可以`c := make(chan int)`然后在不同位置触发五个`a<-c`来并发处理这个channel。

Go与Erlang在并发设计上的最大不同，就是Erlang严格遵循了轻量进程的编码原则，而Go在此基础上提供了更高容忍的调度器，`runtime.Gosched()`，`runtime.GOMAXPROCS(n)`等运行时机制都是为了处理这部分任务调度而设计的。

另外defer也可能被误用作一种异步调用模式，然而只有在defer作用于异步goroutine时才能发挥异步作用，而他的真正含义更类似析构函数，强制将该语句放到代码片段的末尾执行而已。

### Hesitate before redesign your protocol

其实这条并不是从Golang角度出发，而是从otr这个项目本身出发的，otr协议规范中大量采用了状态机和上下文，当我们拿到这样一个实现时，小组的第一直觉是想到优化这种情况，重写了大量的内存逻辑，然而并不是所有的优化点到最后被证明是正确的，尤其是Golang作为拥有GC的语言，它的很多场景与C实现的直接操作内存并不相同，因此在实现状态机时，原本用于优化的cache，并不能保证及时释放，例如上面提到的Wipe out功能，如果没有引入这样的机制，极有可能破坏原本OTR协议的完整性与安全性。

因此在redesign前反复阅读规范，并且参考现有实现，同时根据开发平台的不同采取不同的措施，这些工作在协议编程中缺一不可。