const Block = require('./block');

module.exports = class BlockChain {
    constructor() {
        this.chain = [];
    }

    // Initialize with Genesis block
    initialize() {
        this.chain.push(new Block(0, {Name: "Genesis !"}, 0));
    }

    // Return the last block of the chain
    getLastBlock() {
        if (this.chain.length == 0) {
            return null;
        }

        return this.chain[this.chain.length - 1];
    }

    // Add block to the chain
    addBlock(block) {
        const lastBlock = this.getLastBlock();
        if (!lastBlock) {
            return false;
        }

        block.previousHash = lastBlock.hash;
        block.hash = block.calculateHash();
        this.chain.push(block);
        
        return true;
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; ++i) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];
            
            if (currentBlock.hash != currentBlock.calculateHash()) {
                return false;
            } else if (currentBlock.lastBlock != previousBlock.hash) {
                return false;
            }
        }

        return true;
    }
}
