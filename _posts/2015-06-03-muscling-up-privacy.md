---
published: true
title: "STRIKE-Muscling up Privacy"
layout: post
---



## Do less make more, do more make less

Software is a thing that always conflict but effective as it is. When it comes to privacy tools, it seems like a encumbrance on most softwares. If you are using [OpenPGP](http://www.openpgp.org/) based tool (like [Enigmail](https://www.enigmail.net)) to manage you sensitive messages, you will always struggling about its antihuman-like apis. You will even have to understand (here's a [cartoon](https://www.powtoon.com/show/gmd6oEQEY8q/pgp-basics/) may help you understand more easily) the keystructure, symmetric/asymmetric cryptography and even the whole protocol specifications, so that you can get the idea of "Now, I'm really safe."

It's quite urgent issue for the time being, thus now STRIKE team is mainly up to bring better experience for these tools.

### Privacy is not only Security

You may be eager to investigate in Security issues after reading the crisis above. Wait for a second please.

An area that might appear to have a common ancestry with the subject of privacy is access control and authentication, which are traditional areas associated
with computer security. Work in this area ensures that the recipient of information has the authority to receive that information. While access control
and authentication protections can safeguard against direct disclosures, they do
not address disclosures based on inferences that can be drawn from released data.

The more insidious problem in the subject of anonymity privacy is not so much whether the recipient can get access or not to the information as much as what values will constitute the information the recipient will receive. A general doctrine of the work presented herein is to release all the information but to do so such that the identities of the people who are the subjects of the data (or other sensitive properties found in the data) are protected.

[Tor](https://www.torproject.org/) is now accepted as a common used tool for anonymous network, and there are theories for anonymity analysis like k-anonymity, you can find more infos from scholars and industry in [epic.org](https://epic.org/privacy/)

### Is browser safe enough to do cryptography?

No, but yes partially. In-browser cryptography has been a long-run debating. There are many implementation around cryptography in browser, supporting TLS is now a basic function for most browsers, and W3C is also promoting new features like [WebCryptoAPI](http://www.w3.org/TR/WebCryptoAPI/) for further usage.

### Privacy is hidden but your code should not.
