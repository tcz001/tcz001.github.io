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

No, but partially yes. In-browser cryptography has been a long-run debating. There are many implementation around cryptography in browser, supporting TLS is now a basic function for most browsers, and W3C is also promoting new features like [WebCryptoAPI](http://www.w3.org/TR/WebCryptoAPI/) for further usage. Though this draft is rolling out, not all specifics are implemented strongly, like CSPRNG. Having weak random numbers is a serious flaw in security, that would undo most of the value of encryption.

The current issue around in-browser cryptography is not only the strongness of these cryptography implementations, but also the approach of Application Distribution.

Scripts can be fetched and run on any place, if you provide all the key storage in browser, it will be dangerous to make cryptography tools run together with any other JavaScripts in same environment which may be injected or hijacked. TLS is not an insurance to solve it. Browser extension has better policy to verify your application digest hash. But in this case, people will not be able to enjoy the benefits of realtime web application delivery.

If interested about this issue, you may as well like the challenge game [keys-to-kingdom](http://koto.github.io/blog-kotowicz-net-examples/keys-to-kingdom/)

But we still hope browser and web technology can reach the Avalon someday. But right now, think about some other workaround rather than doing it in web.

### It's none the better for hiding your code

Trust comes from honesty, and vise versa.

There are some misunderstanding against the code security, while you're using a cryptography, the algorithm, protocol, or implementation should not be hidden, only your keys are secret. This is becoming a necessary principal for more audit insights.

As mentioned in kerckhoff's principle "A cryptosystem​ should be secure even if everything about the system, except the key, is public knowledge." Your binary applications can even be decompiled and a private algorithm is usually not reviewed enough in different cases, that's why sourcecode-leak assumption has been emphasised in Threat Modeling, but the keys are stronger and proved by mathematics.

Some arguments which are in favor of this principal
- easier to keep secret key than secret algorithm
- easier to change key than to change algorithm
- standardization
	- ease of deployment
	- public validation

So considering using a well organized public cryptosystem will be a good practice instead of relying on your secret codebase.



While it's  been more and more urgent requirement which was ignored much before. It would be quite awesome and helpful seeing more people realize the importance of privacy, and also understand it correctly, or even participate from both company and customer sides. Make your voice part of them if you care.
