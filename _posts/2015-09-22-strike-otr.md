---
categories: ""
layout: post
splash: ""
tags: null
published: false
title: "STRIKE-OTR"
---

How implementing the new OTR protocol fixed a bug in the previous one

In the latest 4-6 weeks a group of ThoughtWorks named STRIKE were working on a new implementation on OTR(Off-The-Record) version 3 protocol, which is a security layer widely used in XMPP-based communication tools. After 6 weeks work we achieved a new lib[1] in golang and also fixed a bug[2] in the previous one.
We choose Golang as the platform because it's memory-safe and easy to start with. And the existing implementation of OTR in golang is in version 2, without the support of multiple instance tags for multi-devices usage.

We started with reading specifics[3] and did a bunch of investigation in both the old Golang/otr and the official libotr(implemented in C++) during the development.

There is a out-standing feature of OTR called "forward secrecy", which means if you lose control of your private keys, no previous conversation is compromised. Thus requires a OTR implementation to enforce memory forget previous keys after it's refreshed.

During development we picked up the existing version to talk with our new implementation, and carefully checked the difference between Golang/otr and C++/libotr, there were serveral differences between them since Golang/otr was a simplified implementation. But this should not be a excuse of security bug which could lead to larger leak if not fixed.

When test coverage is not enough for old implementation, we did Test Driven Development for this project to ensure the code quality, while running aganst the reveal keys feature to print out enough test data, we found a branch never covered and actually can't be reached in any case, which behaves different from our understanding of the spec. After further investigation we wrote a test to expose this problem easily, and thus found a way to fix the bug.

The existing implementation did not save all the fields in keySlot, which not only caused a cache miss on every calcDataKeys() but also caused the rotate keys functions to not find the MAC keys that should be revealed.

It also stops revealing the sending MAC keys. The finite-state analysis of the otr v2 spec[4] revealed an attack on message integrity when sending MAC keys are revealed. The spec had been updated accordingly[5].

According to the changes in spec, "take all of the receiving MAC keys" and "take MAC keys that were actually used to verify a MAC on a message", that means when DH key is rotated, it should cache receiving MAC keys in the keyslot, and later enforce revealing these MAC keys in the next reveal step.

[1]otr3 - https://github.com/twstrike/otr3
[2]Bug fixed - https://github.com/golang/crypto/commit/aedad9a179ec1ea11b7064c57cbc6dc30d7724ec
[3]Specifics - https://otr.cypherpunks.ca/Protocol-v3-4.0.0.html
[4]The finite-state analysis - http://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.165.7945&rep=rep1&type=pdf
[5]Update of spec v2 - http://sourceforge.net/p/otr/libotr/ci/58fd90cb77c836ff9fa762e91d2b2becc6d5aae8/