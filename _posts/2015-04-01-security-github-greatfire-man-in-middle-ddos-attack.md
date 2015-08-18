---
published: true
title: "Security-man-in-middle DDOS"
layout: post
categories: ""
splash: ""
tags: null
---


## Github & GreatFire man-in-middle DDOS attack

后知后觉的，Github 被攻击80小时后，总算是告了一段落。
这次的DDOS第一步可以说是GFW的一次“伟大”创新，真的是遵循了党章，“发动群众力量”这个教义。当然我们应该给群众加个“不明真相”的帽子。

man in middle可以说是目前最难防护的劫持方式，这次被创新性地用在了海外中国网民身上也算是防不胜防。大概的原理便是通过核心网的侦测功能，将百度js偷梁换柱并通过其反复请求GitHub资源，问题就在于百度的cdn host并没有为海外用户提供不经过墙清洗的服务。这是一次围剿，利用翻墙用户与海外用户的力量，使之成为了黑客和工具，同时也通过对翻墙用户的行为分析，进一步封杀提供跳转服务的海外ip。

措施目前来看只有两个，尽可能只用https，尽可能减少甚至禁用对CNNIC根证书签发的子证书的信任。

引用了泡泡的一些资讯和评论，
https://github.com/greatfire/wiki/wiki/paopao
