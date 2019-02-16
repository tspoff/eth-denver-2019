var HDWalletProvider = require('truffle-hdwallet-provider');
var mnemonic = require('./config/keys');

module.exports = {
  networks: {
    live: {
      network_id: 1 // Ethereum public network
      // optional config values
      // host - defaults to "localhost"
      // port - defaults to 8545
      // gas
      // gasPrice
      // from - default address to use for any transaction Truffle makes during migrations
    },
    rinkeby: {
      provider: new HDWalletProvider(mnemonic, 'https://rinkeby.infura.io'),
      network_id: 4
    },
    development: {
      host: '127.0.0.1',
      port: 8545,
      network_id: '*' // Match any network id
    }
  }
};
