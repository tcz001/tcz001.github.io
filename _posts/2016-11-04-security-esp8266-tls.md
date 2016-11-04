---
layout: post
published: true
title: Security-esp8266/TLS
---
## Bad esp8266

As we know, esp8266 is an awesome platform, able to do a lot and has been used in many IOT solutions, but usually in a very insecure way, not able to avoid MITM attack. What's worse, there are many implementation using http Basic-Auth to achieve authentication, which reveals a bunch of credentials with unawareness.

## Call for TLS

We need a solution to do IOT communication in a more secure way to protect personal data. HTTPS reverse agent can be a solution, but will require another device to handle traffic. This sometimes can't be accepted in practice especially when IOT has a very restricted size and cost limitation.

That's why a TLS library is very urgent right now.

What's good is AVR crypto is not a new thing, we can find primitives required has been tried by pioneers, as I'm looking into AES128 SHA256 ECDH, all have been implemented for micro controllers instruction set.

In this case I'm starting to write a implementation of TLS server, hope it can come out in month.
