---
layout: post
title: "ClojureBoys-101-warm-up"
categories: "ClojureBoys-101"
published: true
tags: 
  - clojure
---

如果你问

> 为什么我要用Clojure？

> Why not?

如果在这里摆一万条原因，函数式？语法糖？代码简练？我觉得最后会被说服的反倒是自己，所以赶紧从你那堆忍不住往注释里加`//F*ck this bull sh*t!!!`的烂代码里抽身出来，跟我一起来学一个有趣的东西，为什么不呢？

这个101课程可以说是RailsGirls的翻版，我想把它叫做<del>ClojureGays</del> ClojureBoys，男孩爱玩有什么错？

所以101系列的第一原则是好玩，希望Clojure能够带给大家乐趣

## setup

保证你的jdk和Clojure已经安装好，
推荐[jenv](http://jenv.io/)和[lein](http://leiningen.org/)

lein是一个Clojure的包管理和build工具，可以帮你解决大部分的工程脚手架和依赖问题。
它基于shell脚本写成，所以安装十分简单。

{% highlight bash %}
mkdir -p ~/bin
cd ~/bin
curl -O https://raw.github.com/technomancy/leiningen/stable/bin/lein
chmod a+x lein
{% endhighlight %}

折腾好这些之后你可以试着在命令行里跑一下

{% highlight bash %}
export PATH="$PATH":~/bin
cd
lein new scratch
{% endhighlight %}
这样一个project就建好了。下面我们就可以尝试打开实验环境，

{% highlight bash %}
cd scratch
lein repl
{% endhighlight %}

REPL是一个“Read, Evaluate, Print Loop”，如果你已经使用过Ruby/Python/JavaScript等语言的控制台，那么你应该很快能反应过来这是个什么东西。

{% highlight bash %}
haha@ClojureGays:~/scratch$ lein repl
nREPL server started on port 56279 on host 127.0.0.1
REPL-y 0.3.0
Clojure 1.5.1
    Docs: (doc function-name-here)
          (find-doc "part-of-name-here")
  Source: (source function-name-here)
 Javadoc: (javadoc java-object-or-class-here)
    Exit: Control+D or (exit) or (quit)
 Results: Stored in vars *1, *2, *3, an exception in *e

user=>
{% endhighlight %}

做好这些准备之后，让我们来做一些热身。

###一些基本类型

{% highlight bash %}
user=> nil
nil
user=> true
true
user=> false
false
{% endhighlight %}

###最简单的函数

{% highlight bash %}
user=> inc
#<core$inc clojure.core$inc@6f7ef41c>
{% endhighlight %}
inc是increment的alias，是一个操作数字的基本函数。

{% highlight bash %}
user=> (inc 0)
1
{% endhighlight %}
inc通过两个括号包括起来之后就有了一次函数调用。

###Single quote

{% highlight clojure %}
user=> '123
123
user=> '"foo"
"foo"
user=> '(1 2 3)
(1 2 3)
{% endhighlight %}
Clojure中的单引号`'`，是一个保留词，它的具体含义是:

> Rather than evaluating this expression’s text, simply return the text itself, unchanged.

> 不要替我解释表达式，请给我返回它原来的样子。

如果不是很明白，不妨尝试一下去掉单引号

{% highlight clojure %}
user=> (1 2 3)

ClassCastException java.lang.Long cannot be cast to clojure.lang.IFn  user/eval660 (NO_SOURCE_FILE:1)
{% endhighlight %}

在这里解释器把(1 2 3)中的1视作function去调用，结果就是Long类型的数字其实是不能作为函数调用的，而对它的强制转型IFn也没有定义，所以我们得到了解释器抛出的异常ClassCastException。

让我们用一个基本函数`type`看看`1`和`'(1 2 3)`到底是什么

{% highlight clojure %}
user=> (type 1)
java.lang.Long
user=> (type '(1 2 3))
clojure.lang.PersistentList
{% endhighlight %}

现在我们可以很容易的推断出Clojure的解释过程，首先它会获取一个序列List，通过这个序列交给解释器去做真正的调用。

###声明函数和“变量”

{% highlight clojure %}
user=> (def foo (fn [a b] (* a b)))
#'user/foo
user=> (foo 3 4)
12
{% endhighlight %}

上面我们用`def`定义了一个以`foo`命名的函数，其构造表达式就是`(fn [a b] (* a b))`
函数体是由一个`(fn name? [params*] exprs*)`定义的。调用一个函数除了给它def一个名称之外还可以有匿名的方式`((fn [a b c] (+ a b c)) 2 4 6)`。

下面还有一个有趣的例子，

{% highlight clojure %}
user=> (let [+(fn [a b] (* a b))] (+ 2 3))
6
{% endhighlight %}

如果你有js经验，想必已经意识到这句代码里的let其实使用了一个context binding域，将原来的+绑定为新的fn函数，当然，这种绑定只在这个let生效的函数域内有效，你也可以用let来为变量绑定实参，这些都会在以后的课程中提及，在此就不赘述了。

### doc和source

另外需要介绍的是doc和source两个函数，它们是查询core API定义的好手段，当你不确定一个函数有什么用以及如何实现的时候，优先考虑这两个函数。
{% highlight clojure %}
user=> (doc doc)
-------------------------
clojure.repl/doc
([name])
Macro
  Prints documentation for a var or special form given its name
nil

user=> (source source)
(defmacro source
  "Prints the source code for the given symbol, if it can find it.
  This requires that the symbol resolve to a Var defined in a
  namespace for which the .clj is in the classpath.

  Example: (source filter)"
  [n]
  `(println (or (source-fn '~n) (str "Source not found"))))
nil
{% endhighlight %}


###[Clojure's Quick Reference](https://clojuredocs.org/quickref)
了解完以上部分之后，你差不多就可以开始用REPL做探索式学习了，不要害怕犯错，下一篇会开始引入一些题目帮助大家了解Clojure的能力，你需要学习的Clojure知识都可以在Clojuredocs站点找到，这是一个由社区维护的wiki，提供了常用的documentation和一些代码样例，初学Clojure的时候没事刷一刷，总能学到不少有趣的东西。