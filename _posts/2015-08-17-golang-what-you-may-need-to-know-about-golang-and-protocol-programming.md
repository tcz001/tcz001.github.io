---
categories: ""
layout: post
splash: ""
tags: null
published: false
title: "Golang-What you may need to know about Golang in Protocol Programming"
---

## 从何谈起？

Golang是一门设计很“简约”的语言（尤其与其竞争对手c++相比），编译强类型语言+运行时垃圾回收，没有内建繁芜的函数式特性，总的来说，它适用的场景从最火热的几个杀手级项目就可以看出一些端倪了。
docker、etcd、raft、nsq，尽管go并不是万金油，但是作为一门系统级语言，简单的指针操作，原生的gc与并发（Concurrency）支持，拥有编译时类型校验与安全的内存模型，无不使得这个小地鼠（Gopher）显得犀利又可爱。

而STRIKE team，在饱尝Enigmail中使用JavaScript进行安全应用开发的痛苦体验后，选择Go作为隐私消息协议OTR的开发平台，主要也是看重了下面几点：
- 性能接近C语言
- 内存安全，强类型
- 系统与网络层的大量应用
- 作为有gc同时又能操作指针的语言，福祸参半

## 说这么多，那到底我需要知道什么？

首先是几个反模式，我们经常在golang中遇到的特性误解。

### Embedding abuse

Embedding是个经常被误解的特性，举个OTR中的现实例子
原本的Context拥有三层embedding，

```
type Coversation struct{
	version
    AKEContext
    SMPContext
}
type AKEContext struct{
	...
}
type SMPContext struct{
	...
}
```

重构后：

```
type Coversation struct{
	version version
    akeContext AKEContext
    smpContext SMPContext
}
type AKEContext struct{
	Coversation *Coversation
    ...
}
type SMPContext struct{
	Coversation *Coversation
    ...
}
```

或许你会觉得在使用上与下面的代码并没有什么不同，但事实上当你无法阻止开发中类型增加，一旦产生了歧义和循环调用，事情就变得复杂起来了
