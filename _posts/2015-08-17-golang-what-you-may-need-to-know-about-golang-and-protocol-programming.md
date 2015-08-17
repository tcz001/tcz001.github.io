---
categories: ""
layout: post
splash: ""
tags: null
published: false
title: "Golang-What you may need to know about Golang and Protocol Programming"
---

## 从何谈起？

Golang是一门设计很“简约”的语言（尤其与其竞争对手c++相比），编译+运行时gc，没有繁芜的函数式特性，总的来说，它适用的场景从最火热的几个应用就可以看出一些端倪了，docker、etcd、raft、nsq，golang并不是一个万能的语言，但是作为一门系统级语言，对指针操作简单，原生的gc与跨平台并发（Concurrency）支持，拥有编译时类型校验与安全的内存模型，无不使得这个小地鼠（Gopher）显得犀利又可爱。

STRIKE选择Golang作为后续隐私消息协议OTR的开发平台，主要是注重了几点：
- 性能接近C语言
- 内存安全，强类型
- 系统与网络层的大量应用
- 作为有gc同时又能操作指针的语言，福祸参半

## 说这么多，那到底我需要知道什么？

