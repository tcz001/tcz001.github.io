---
layout: post
published: true
title: Security-MITM-attack-via-Evil-twin-AP
---
## Setup a evil twin AP with same Password

### Prepare

- A router with OpenWRT (If you want to try on your laptop, try aircrack-ng also)
- Desktop for auditing

### Quick Start

- Setup the AP and bridge client to connect the orignal twin AP
- Name the AP with same ESSID, you don't need to change BSSID because it's designed with same
- Ask or Try to brute-force crack the passphrase of orignal AP (for WEP, you can also try to capture packets to decrypt, for WPS enabled router, you can attack it by cracking the PIN code)
- Setup the Evil AP with the same passphrase

After this, you can wait until someone (maybe your own mobile phone) connect to your AP without any manual configuration. That's the beauty of SSID system.

- Install tcpdump on the router
- Install chaosreader on your desktop

On desktop, redirect the tcpdump output into local file.

`ssh user@ROUTER_IP "tcpdump -s 0 -U -w - -i ra0 not port 22 and not host DESKTOP_IP" > /tmp/all.cap`

and then `mkdir /tmp/chaos && cd /tmp/chaos && chaosreader /tmp/all.cap`

this will extract all the traffic which are in plaintext and then create a index.html in current folder, open the index.html, you will see a report with images and HTTP requests. Enjoy it.

### Difficulties

- WPA is resisting MITM through four handshakes

Both sides computing a shared pseudorandom generated from two nonce and PMK using PBKDF2-SHA1, without revealing the PMK.


PTK =
PseudoRandom( PSK / PMK in EAP, 
                            AP a_nonce,
                            STA s_nonce,
                            AP MAC_address,
                            STA MAC_address)

Private secret: PSK / PMK in EAP
Public values: AP nonce, STA nonce, AP MAC address, STA MAC address
Shared secret: PTK


- Https Spoofing is not included in this tiral, because it's kind of tricky when you have to use a illegal certificate or have to attack TLS protocol from basis, will mention it next time.
