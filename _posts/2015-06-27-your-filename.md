---
published: false
title: "STRIKE-AwESome"
layout: post
tags: 
  - hacker
---


#STRIKE GOes AwESome

Last two weeks we've been implementing the Advance Encyption Algorithm, a symetric block cypher, with the Go programming language. The goals being to get acquianted with implementation of cryptographic primitives and a modern low level programming language. We definitely started with the right foot these two weeks by having Reinaldo finally in Quito.

We added a new project to the STRIKE account in github called AwESome. Here we are implementing many of the cryptography primitives used to encrypt and decrypt a text. With the work we'done during this couple of weeks you would be able to encrypt like this

-> start with plain text 

-> if plain text's bytes length is not exact multiple of block size

-> -> pad the block with PKCS5/7

-> break plain text into blocks

-> choose between ECB and CBC as block mode to run the process

-> for each block

-> -> encrypt using AES as the block cipher algorithm

-> join all cipher blocks

-> end with cipher text

At the end the outcome from our work was having AES-CBC mode and AES-ECB modes plus PKCS7 padding.

As general impressions from these weeks of work we saw that implementing the operations in the Rijndael field was very tricky, particularly because we were not used to the language used to describe the field in the paper . But once Reinaldo got the polynomial representation and the matrix representation figured out it was all much easier.

Also getting our heads around to work with bits and bytes has been tricky. Arithmetic operations with byte arrays, dealing with subtle differences betweens bytes, ints, unsigned ints and the like was misleading to say the leeast. But it lasted till we got used to that world and Golang proved to be hepful in making portable bitwise operations without worrying about the endianess of the target (we didn't have to learn how to write "endian-independent code" http://www.ibm.com/developerworks/aix/library/au-endianc/).

Finding test cases for some of the AES primitives was also not trivial. Opposed to how easy was to find test data for the entire encrypt and decrypt functions. Nevertheless we found the info we needed[1][2][3][4].

Of course all this begun with the understanding terminology, principles and algorithms that are very important in the crypto domain. It was also very valuable the conversations around the core decisions of AES: why using that specific field? why using this partiular SBox rather than a random one?

Today STRIKE closes this week expecting Tania to arrive from Porto Alegre and Ola back from his vacations so we can plan the next strike.

[1] http://csrc.nist.gov/publications/fips/fips197/fips-197.pdf
[2] http://csrc.nist.gov/publications/nistpubs/800-38a/sp800-38a.pdf
[3] https://en.wikipedia.org/wiki/Rijndael_key_schedule
[4] https://en.wikipedia.org/wiki/Padding_(cryptography)

### ###
From here below looks to me it is material for a tecnical blog for insights were we can explain things in more detail.
### ###

###Padding with PKCS7

When used in a block cipher mode of operation (CBC, ECB) makes them vulnerable to padding oracle attacks (https://en.wikipedia.org/wiki/Padding_(cryptography)#Block_cipher_mode_of_operation and https://blog.skullsecurity.org/2013/padding-oracle-attacks-in-depth).

###Simple block mode ECB

why it's not safe: 
    pseudo-randomness is a important principle for cryptography, it will enhence the protocol by making it hard to guess in a linear field of time.
    
    [pseudo-randomness](https://www.dropbox.com/s/p3023qaqqff3lde/%E5%B1%8F%E5%B9%95%E6%88%AA%E5%9B%BE%202015-06-26%2011.28.10.png?dl=0)
    
    The image on the right is how the image might appear encrypted with CBC, CTR or any of the other more secure modes—indistinguishable from random noise. Note that the random appearance of the image on the right does not ensure that the image has been securely encrypted; many kinds of insecure encryption have been developed which would produce output just as "random-looking".

###Chained block mode CBC

###AES 128/192/256
####AES key expanding

Key expanding is a way to build up a stronger key schedule for multirounds cipher, it makes each round has a independent key for encryption which increase the cost of guessing the origin key.

####AES cipher algorithm

Inside of the cipher algorithm, you will need to implement states transformations for that block: SubBytes(), ShiftRows(), MixColumns(), AddRoundKey().
S-Box is an important optimized table used in SubBytes() also following the pseudo-randomness principle, the generation of S-Box in AES is 1) non-linearity 2) algebraic complexity.

##... and back again

From padded to not padded

Reversing block modes

Decrypting AES cipher text
