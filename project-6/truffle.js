const HDWalletProvider = require('truffle-hdwallet-provider');
const infura = "https://goerli.infura.io/v3/2747e4854a294db6b5cf37a3737ac92e";
const mnemonic = "spirit supply whale amount human item harsh scare congress discover talent hamster";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      websockets: true,
      network_id: "*" // Match any network id
    },
    goerli: {
      provider: () => new HDWalletProvider(mnemonic, infura),
        network_id: 5,
        gas: 4500000,
        gasPrice: 10000000000
    }
  },
  compilers: {
    solc: {
      version: "0.4.24"
    }
  }
};