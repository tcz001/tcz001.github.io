---
categories: iku
layout: post
splash: ""
tags: 
  - murmur
published: false
title: "2016-03-09-iku-Isomorphic-JavaScript.md"
---

## 同构JavaScript

也许你已经很熟悉同构js，也许你是第一次接触这个名词。当下最火的几个前端框架，当属React、Angular和Vue，都是基于DOM的组件化，提供了非常方便的前端渲染。

**Isomorphic JavaScript**源于前后端分离、单页面应用带来的一些SEO和页面结构与交互逻辑混杂弊端，也是目前几个框架在提供“渲染”概念之后的产物。

那么，什么是同构的JavaScript？

简言之就是同一套JavaScript可以运行在不同的端，浏览器、后端，甚至由此独立出来的前端渲染服务层。
过去你可能可以用browserify来调用node的模块，而现在你还可以在node里跑跑本来应该在浏览器里执行的渲染。

我在做[易酷游戏](https://www.ecoolhub.com/)官网和[游戏库](https://www.ecoolhub.com/games/list/1)的时候，就尝试使用了Isomorphic JS（react提供了server render，而vue也有一个vue-server提供支持），对于一个轻量交互的web服务，同构js可以提供非常友好的SEO展示，同时也能让你在开发时享受到单页面应用的简单和无加载机制。

在开发环境中，我可以使用<script>嵌入来调试所有的页面渲染，用devtool来做像素级调整、将交互逻辑封装在另一个独立的库内，使用完整的runtime来处理这些强交互的需求。

在生产环境中，我可以复用之前写好的页面结构，在后端渲染和cache，只让交互逻辑在浏览器加载，这样一来某些蠢哭的搜索引擎爬虫就可以很容易获取完整的页面结构和内容。