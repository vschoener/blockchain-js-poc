const BlockChain = require('./blockChain');
const Block = require('./block');

let blockChain = new BlockChain();
blockChain.initialize();
blockChain.addBlock(new Block(1, {name:"I'm Block 1, see ?", amount:10}));
blockChain.addBlock(new Block(2, {name:"I'm Block 2, see ?", amount:13}));
blockChain.addBlock(new Block(3, {name:"I'm Block 3, see ?", amount:1}));

console.log(JSON.stringify(blockChain, null, 4));

outputChainValidity = function(blockChain) {
    if (blockChain.isChainValid()) {
        console.log('BlockChain is valid');
    } else {
        console.log('BlockChain not valid');
    }
};

outputChainValidity(blockChain);

// Simulate bad guy changing the one of the block
// How sneaky you are :)
blockChain.chain[2].data.amount = 100000;

// No way :)
blockChain.chain[2].hash = blockChain.chain[2].calculateHash();

console.log(JSON.stringify(blockChain, null, 4));
outputChainValidity(blockChain);
