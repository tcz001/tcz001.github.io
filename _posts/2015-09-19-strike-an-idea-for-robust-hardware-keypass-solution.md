---
categories: ""
layout: post
splash: ""
tags: 
  - "null"
published: false
title: "STRIKE - An idea for robust hardware keypass solution"
---


## How we do now?

We are using keypass for different solution, but from our experience no matter whether you are using a hardware for processing password or have other ways to provide a secure channel to provide password. There is no guarantee that your password can't be hijacked by side-channel approach.

## How we solve

We can use asymmetric key to avoid leaking password, but you will need to generate a pair of public and private keys, by any methods.

Then upload your public key to server side, so that it can verify your signature by decrypting your signature.

Now, comes the most important part, every time the service provider should ONLY accept a signature of what it requires, it can be a dynamic word which has a expiring time.

In this case the signature will be used both for verification and symmetric key on server side.

## Fingerprint

Fingerprint is a Lossy algrothm, a
