const SHA256 = require("crypto-js/sha256");
class Block {
  constructor(index, timestamp, data, chain, precedingHash = " ") {
    this.index = index;
    this.timestamp = timestamp;
    this.chain = chain;
    this.data = data;
    this.precedingHash = precedingHash;
    this.hash = this.computeHash();
    this.nonce = 0;
  }
  computeHash() {
    return SHA256(
      this.index +
        this.precedingHash +
        this.timestamp +
        this.chain +
        JSON.stringify(this.data) +
        this.nonce
    ).toString();
  }
  proofOfWork(difficulty) {
    while (
      this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")
    ) {
      this.nonce++;
      this.hash = this.computeHash();
    }
  }
}

class Blockchain {
  constructor(block) {
      if(!block instanceof Block) throw Error("Instance of Block required.");
    this.difficulty = 4;
    this.blockchain = [this.startGenesisBlock(block.timestamp, block.data, block.chain)];
  }
  startGenesisBlock(timestamp, data, chain) {
    return new Block(0, timestamp, data, chain, " ");
  }
  obtainBlock(chain, index) {
    let _chain = this.blockchain.filter((block) => block.chain === chain);
    if(_chain.length && isNaN(index))
    return _chain[_chain.length - 1];
    if(_chain.length && !isNaN(index))
    return _chain[index];
    return {
        index:-1,
        hash: " "
    }
  }
  obtainBlockByHash(chain, hash) {
    let _chain = this.blockchain.filter((block) => block.chain === chain);
    return _chain.filter((block) => block.hash === hash);
  }
  obtainGenesisBlock(chain) {
    let _chain = this.blockchain.filter((block) => block.chain === chain);
    if(_chain.length)
    return _chain[0];
    return {
        index:-1,
        hash: " "
    }
  }
  obtainLatestBlock(chain) {
    let _chain = this.blockchain.filter((block) => block.chain === chain);
    if(_chain.length)
    return _chain[_chain.length - 1];
    return {
        index:-1,
        hash: " "
    }
  }
  addNewBlock(newBlock) {
    newBlock.index = this.obtainLatestBlock(newBlock.chain).index + 1;
    newBlock.precedingHash = this.obtainLatestBlock(newBlock.chain).hash;
    newBlock.proofOfWork(this.difficulty);
    this.blockchain.push(newBlock);
    if (!this.checkChainValidity(newBlock.chain)) {
      this.blockchain.pop();
      return false;
    }
    return true;
  }
  checkChainValidity(chain) {
    let _chain = this.blockchain.filter((block) => block.chain === chain);
    for (let i = 1; i < _chain.length; i++) {
      const currentBlock = _chain[i];
      const precedingBlock = _chain[i - 1];
      if (currentBlock.hash !== currentBlock.computeHash()) {
        return false;
      }
      if (currentBlock.precedingHash !== precedingBlock.hash) return false;
    }
    return true;
  }
}
module.exports = {
    Block,
    Blockchain
}
