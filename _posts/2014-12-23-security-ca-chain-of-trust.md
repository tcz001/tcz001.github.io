---
published: true
title: "security-CA & chain of trust"
layout: post
---

## CA & chain of trust

上周在西安做的session中有个争议点，主要是针对CA究竟能不能被hack，在这里解释一下CA证书真正的签发与验证原理。
 
如下图，签发与认证
![CA sign and verify](/_posts/ffd419fd-3820-3672-93b5-f703627f51cb.png)

签发证书的步骤：
Signing阶段，首先撰写证书的元信息：签发人、地址、签发时间、过期失效等等；
通过通用的hash算法将信息摘要提取出来；
Hash摘要通过签发者的私钥进行非对称加密，生成一个签名密文；
将签名密文attach到文件证书上，使之变成一个签名过的证书。
验证证书的步骤：
Verification阶段，浏览器获得之前签发的证书；
将其解压后分别获得“元数据”和“签名密文”；
将同样的Hash算法应用到“元数据”获取摘要；
将密文通过公钥（非对称算法，私钥加密，公钥解密）解密获得同样的摘要值。
 
在这里的签名密文是一个重要凭证，Signature与签发人的公钥一同传输，可以避免中间人在获取证书时对证书内容的篡改。
通过CA，可以保证server提供的公钥（public key）不被proxy篡改，否则签发“元信息”不满足信任链（Chain of trust），会被浏览器识别为“不安全”的。
 
有关信任链的验证流程，可以参考下图：
![chain of trust](/_posts/dcb3fd7b-1f15-371c-8fe7-fb11c9e0acd6.gif)
 
利用这个CA提供的公钥，可以为TLS的握手提供第一次交换密文随机数，之后就可以使用对称加密通信了。