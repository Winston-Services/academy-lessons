![LearnToEarn](https://user-images.githubusercontent.com/29209354/196842928-6cb6a581-d17c-4fe2-88ea-4d45372015a5.png)
##  Google says :
Blockchain is a system of recording information in a way that makes it difficult or impossible to change, hack, or cheat the system. A blockchain is essentially a digital ledger of transactions that is duplicated and distributed across the entire network of computer systems on the blockchain.
 But honestly, that definition is misleading. So, let's break down what is a blockchain.
 Let's start with a little bit of code to illustrate our first section of this discussion.
```JavaScript

class Block { };
```

 Each blockchain consist of a series of blocks. Various blockchains will add and alter the data stored in the block but they are basically a structure to store data. 
 On some blockchains, like Ethereum, you have tokens, and other digital assets that are stored in smart contracts. This data, or smart contracts are interpreted by other software clients that process that data.
 Let's take a closer look at some of the data we find in other blockchains.
 Let me add some more code to our example to illustrate some of the data that is stored on blockchains.
 
```JavaScript
class Block {
  constructor(data, precedingHash = " ") {
    this.data = data;
    this.precedingHash = precedingHash;
    this.hash = this.computeHash();
    this.nonce = 0;
  }
  computeHash() {}
}
```


 So in our block structure, here I am using a class in JavaScript, but you can create this structure with just about any language.
 in the constructor of the class, I have a few variables setup. Let's break those down and talk about them a little bit.
 I'm going to go backwards a bit so bare with me, lets start with the nonce, and what it is.
 the nonce is a number that changes to help increase the difficulty in which the hashing process is configured to require n number of characters matching within the hash. It's part of the security that makes up blockchain.
 so, now we can talk about the hash and precedingHash.
 to do this ill add some more code to our class, and talk about what it does.

```JavaScript
class Block {
  constructor(data, precedingHash = " ") {
    this.data = data;
    this.precedingHash = precedingHash;
    this.hash = this.computeHash();
    this.nonce = 0;
  }
  computeHash() {
    return SHA256(      
        this.precedingHash +
        JSON.stringify(this.data) +
        this.nonce
    ).toString();
  }
}
```

in this illustration I have added some code to the computeHash method of our Block class.
This method calls on a cryptographic library SHA256, you can read more about it here :
https://en.wikipedia.org/wiki/SHA-2
 
SHA-2
SHA-2 (Secure Hash Algorithm 2) is a set of cryptographic hash functions designed by the United States National Security Agency (NSA) and first published in 2001. They are built using the Merkle–Damgård construction, from a one-way compression function itself built using the Davies–Meyer structure from a specialized block cipher.
SHA-2 includes ...
So, to break it down a bit a hashing function is a function that mathematically transforms data into a pattern that can be verified.
So, we have the hash, and the precedingHash, and this is how like a linked list a blockchain connects each block securing the data they hold together.
the precedingHash matches the hash of the previous block.
 so, that is a blockchain at it's simplest form. Of course the blockchains you use today are way more complex than what is illustrated here, however the concepts covered here can be found in most the blockchains in existence today. 
 We have talked about one of the structures that make up a blockchain, now we can illustrate some code that handles the basic functions of the blockchain.

```JavaScript
class Blockchain { }
```

You can find the complete code, and use it here in our discord server to test out blockchain. This chain is not decentralized, and is not written to file. It is reset every 24 hrs or so.
https://bitbucket.org/Dre_mingrainbow/winston-blockchain-wiki/src/main/WinstonBlockchain.js 
Bitbucket
