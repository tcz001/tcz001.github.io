---
layout: post
title: "ClojureBoys-101-my-first-cljproj"
categories: "ClojureBoys-101"
published: true
tags: 
  - clojure
---

lein is no more than a generator.
有关generator其实已经有很多比较成功的例子了，从从Rails到Yeoman，

> simplicity and quick achievement

优雅的模板是每一个脚手架工具都必须优先考虑的事情。

对于将DRY强迫症发挥到极致的Clojure程序员来说，不只是project，就是连language feature，他们都希望能够通过简单的生成器来管理，于是lein就诞生了。

{% highlight bash %}
Leiningen is a tool for working with Clojure projects.

Run `lein help $TASK` for details.

See also: readme, faq, tutorial, news, sample, profiles, deploying, gpg, mixed-source, templates, and copying.
{% endhighlight %}

## 石头剪刀布

这是一个简单的例子，我们可以利用core.async和core.typed提供的语义级别支持，构建出一个石头剪刀布的，然后同时感谢Clojurescript，我们还可以把它移植到browser端来。

首先描述一下问题，我们希望获得一个分歧终端机的功能，所以我们首先需要一组石头剪刀布的行为，以及相应的胜负规则，之后还需要定义一些数据结构用来判断比赛胜负、打印输出结果、并且扩展一些队列和多次迭代的功能。

### (create project)

通过`lein new webapp`命令可以搭建起一个简单的工程脚手架。

{% highlight bash %}
tree
.
|-- LICENSE
|-- README.md
|-- doc
|   `-- intro.md
|-- pom.xml
|-- project.clj
|-- resources
|-- src
|   `-- webapp
|       |-- core.clj
|       `-- rps_async.clj
|-- target
|   |-- classes
|   |   `-- META-INF
|   |       `-- maven
|   |           `-- webapp
|   |               `-- webapp
|   |                   `-- pom.properties
|   |-- repl-port
|   |-- stale
|   |   `-- extract-native.dependencies
|   `-- webapp-0.1.0-SNAPSHOT.jar
`-- test
    `-- webapp
        `-- core_test.clj
{% endhighlight %}

### (talk-about namespace)
其中的核心模块就放在core.clj中，用任何编辑器打开这个文件。
{% highlight clojure %}
(ns webapp.core)

(defn foo
  "I don't do a whole lot."
  [x]
  (println x "Hello, World!"))
{% endhighlight %}

首先Clojure沿用了java的namespace概念，第一行的ns函数就是定义了一个namespace。
通过这样的声明，你可以将classpath中的Clojure namespace方便地载入进来，foo就是该命名空间下的函数了。
[Tips：namespace由于java的历史原因，需要对`-`向下划线`_`的转换才能正常使用，例如rps_async.clj的namespace其实是rps-async。]

这时不妨打开`lein repl`试一下。
{% highlight clojure %}
user=> (require 'webapp.core)
nil
user=> (webapp.core/foo 'Fan)
Fan Hello, World!
nil
{% endhighlight %}

同时你也可以使用use函数来直接引用namespace到当前context。

{% highlight clojure %}
user=> (use 'webapp.core)
nil
user=> (foo 'Fan)
Fan Hello, World!
nil
{% endhighlight %}

### (require libs)

{% highlight clojure %}
; Adapted from: http://tech.puredanger.com/2013/07/10/rps-core-async/
(ns webapp.rps-async
  (:require [clojure.core.typed :as t]
            [clojure.core.async :as a]
            [clojure.core.typed.async :as ta]))
{% endhighlight %}

### (build types)

{% highlight clojure %}
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Types
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(t/defalias Move
  "A legal move in rock-paper-scissors"
  (t/U ':rock ':paper ':scissors))

(t/defalias PlayerName
  "A player's name in rock-paper-scissors"
  t/Str)

(t/defalias PlayerMove
  "A move in rock-paper-scissors. A Tuple of player name and move"
  '[PlayerName Move])

(t/defalias RPSResult
  "The result of a rock-paper-scissors match.
  A 3 place vector of the two player moves, and the winner"
  '[PlayerMove PlayerMove PlayerName])
{% endhighlight %}

### (composite-types)

{% highlight clojure %}

;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
;; Implementation
;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

(t/ann MOVES (t/Vec Move))
(def MOVES [:rock :paper :scissors])

(t/ann BEATS (t/Map Move Move))
(def BEATS {:rock :scissors, :paper :rock, :scissors :paper})
{% endhighlight %}

### (function-types)

{% highlight clojure %}
(t/ann rand-player [PlayerName -> (ta/Chan PlayerMove)])
(defn rand-player
  "Create a named player and return a channel to report moves."
  [name]
  (let [out (ta/chan :- PlayerMove)]
    (ta/go (while true (a/>! out [name (rand-nth MOVES)])))
    out))

(t/ann winner [PlayerMove PlayerMove -> PlayerName])
(defn winner
  "Based on two moves, return the name of the winner."
  [[name1 move1] [name2 move2]]
  (cond
    (= move1 move2) "no one"
    (= move2 (BEATS move1)) name1
    :else name2))

(t/ann judge [(ta/Chan PlayerMove) (ta/Chan PlayerMove) -> (ta/Chan RPSResult)])
(defn judge
  "Given two channels on which players report moves, create and return an
  output channel to report the results of each match as [move1 move2 winner]."
  [p1 p2]
  (let [out (ta/chan :- RPSResult)]
    (ta/go
      (while true
        (let [m1 (a/<! p1)
              m2 (a/<! p2)]
          (assert m1)
          (assert m2)
          (a/>! out (t/ann-form [m1 m2 (winner m1 m2)]
                                RPSResult)))))
    out))

(t/ann init (t/IFn [PlayerName PlayerName -> (ta/Chan RPSResult)]
                   [-> (ta/Chan RPSResult)]))
(defn init
  "Create 2 players (by default Alice and Bob) and return an output channel of match results."
  ([] (init "Alice" "Bob"))
  ([n1 n2] (judge (rand-player n1) (rand-player n2))))

(t/ann report [PlayerMove PlayerMove PlayerName -> nil])
(defn report
  "Report results of a match to the console."
  [[name1 move1] [name2 move2] winner]
  (println)
  (println name1 "throws" move1)
  (println name2 "throws" move2)
  (println winner "wins!"))

(t/ann play [(ta/Chan RPSResult) -> nil])
(defn play
  "Play by taking a match reporting channel and reporting the results of the latest match."
  [out-chan]
  (let [[move1 move2 winner] (a/<!! out-chan)]
    (assert move1)
    (assert move2)
    (assert winner)
    (report move1 move2 winner)))

(t/ann play-many [(ta/Chan RPSResult) t/Int -> (t/Map t/Any t/Any)])
(defn play-many
  "Play n matches from out-chan and report a summary of the results."
  [out-chan n]
  (t/loop [remaining :- t/Int, n
           results :- (t/Map PlayerName t/Int), {}]
    (if (zero? remaining)
      results
      (let [[m1 m2 winner] (a/<!! out-chan)]
        (assert m1)
        (assert m2)
        (assert winner)
        (recur (dec remaining)
               (merge-with + results {winner 1}))))))
{% endhighlight %}

### (lambda)

{% highlight clojure %}
(fn []
  (t/ann-form (a/<!! (init))
              (t/U nil RPSResult)))
{% endhighlight %}