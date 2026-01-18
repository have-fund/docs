# Decentralized Networks

In previous articles, I often said that our work with the Fund is done without middlemen—in a **decentralized** way.
This may sound unbelievable: how can a whole system with money on accounts work without any privileged center?

In this article, I skipped many complex details. Still, this is not an easy read.
Please take your time, read it in a calm setting and with attention.
You will gain an understanding of the technology that changed the world of finance.

## Ancient Technologies

The word “cryptocurrency” comes from the words “cryptography” and “currency”.
Both of these ideas were created by humans a very long time ago.
It is wrong to think that everything started with [Bitcoin](https://en.wikipedia.org/wiki/Bitcoin).

We could talk forever about research in cryptography that slowly led to decentralized money networks.
But then this would be a huge book, not a short article.

Here, we will look at only a few of the most important discoveries that allow people
to confirm ownership of their assets in a chaotic system.

## Hashing

The foundation of modern cryptography is the [Hash function](https://en.wikipedia.org/wiki/Hash_function).
The history of this idea goes back to the Middle Ages.
The modern standard that Bitcoin uses today was published in 2002.

The idea of hashing is simple: a function takes any kind of information as input and turns it
into a number of fixed size. For the [SHA-256](https://en.wikipedia.org/?title=SHA256&redirect=no)
function (used in Bitcoin), this number is between 0 and

> 115,792,089,237,316,195,423,570,985,008,687,907,853,269,984,665,640,564,039,457,584,007,913,129,639,935

The same input always produces the same output. This output number is called a “hash”.
It is impossible to restore the original information from its hash. That is the whole idea of hashing.

## Distributed Database

One way to use hashing is the [Blockchain](https://en.wikipedia.org/wiki/Blockchain).
It is a database where every update is added as a new block of data,
and every block contains the hash of the previous block.

In a blockchain, it is impossible to simply change an old block. After it, many other blocks were added.
If you remove a block from the middle, all following blocks become invalid because the hashes no longer match.

Blockchains are usually stored on a large number of independent computers—network nodes.
Each node checks the hash of every block and compares it with the next block.
The current state of the network is stored as a full history of all events. This history cannot be erased or faked.

## Asymmetric Cryptography

People have known ways to encrypt secret messages for a very long time.
But an [invention](https://en.wikipedia.org/wiki/Public-key_cryptography)
of the second half of the 20th century still looks almost magical today.

In the past, the same key was used to encrypt and decrypt a message. This key had to be safely sent to the other person.
If someone stole the key, they could read all messages. Now it is possible to generate two keys at once.
A message encrypted with one key can be decrypted only with the second key.
It is useless to try to decrypt the message using the same key that encrypted it.

You can create such a pair of keys and keep one of them in strict secret (the private key).
The second one can be published openly (the public key). Now anyone can send you an encrypted message through open
communication channels without fear of interception (by encrypting it with your public key). Everyone in the world
can know your public key, but no one can read the message without the second key—your private key.

## Digital Signature

Asymmetric cryptography is useful by itself, but it also created a very important
side product—the [digital signature](https://en.wikipedia.org/wiki/Digital_signature).

Take any document, calculate its hash, encrypt this hash with your private key, and attach it to the document.

That’s it. This document is now guaranteed to come from the owner of the private key.
A handwritten signature on paper can be forged. A digital signature cannot. Verification is very simple:

1. Calculate the hash of the document.
2. Decrypt the signature using the author’s public key.
3. If the two results match, the signature is valid.

It is useless to change the document, because its hash will change. It is also useless to encrypt a new hash with
your own key, because the author’s public key will not decrypt it. By owning a private key and using the digital
signature algorithm, we can strongly prove our ownership of information.

## The First Cryptocurrency

Bitcoins are stored in a distributed blockchain on tens of thousands of computers all over the world.

A balance address is,
[in simple terms](https://bitcoinbriefly.com/ultimate-guide-to-bitcoin-wallets-seeds-private-keys-public-keys-and-addresses),
a public key. If someone knows your address, they can send you bitcoins.
But to send bitcoins from your address, a private key is required—and no one else knows it.

Every transfer of bitcoins is a transaction. It is a data structure that shows from which address to which address,
and how many bitcoins are sent. Each transaction must be signed with the digital signature of the sender’s address.
Otherwise, the network will not accept it.

Owning your balance simply means owning your private key.
Keeping private keys safe and secret is the responsibility of every Bitcoin user.

Bitcoin was built on a very strong foundation. The technologies described in this article are only a small part of it.
Launched in the distant year 2009, this network forced humanity to rethink the idea of financial systems.
Since then, progress has moved far ahead, and many other decentralized networks have appeared.
But the principle of decentralization has remained the same as the one first defined by Bitcoin.

---

Next, we will look at the next step in the evolution of decentralized networks: Ethereum and smart contracts.
