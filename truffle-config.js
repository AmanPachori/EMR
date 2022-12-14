const HDWalletProvider = require('@truffle/hdwallet-provider');
const keys =  require("./keys.json")
module.exports = {

  contracts_build_directory:"./public/contracts",
  networks: {

    development: {
     host: "127.0.0.1",     // Localhost (default: none)
     port: 7545,            // Standard Ethereum port (default: none)
     network_id: "5777",       // Any network (default: none)
    },
    matic: {
      provider: () => new HDWalletProvider(keys.MNEMONIC, ` https://rpc-mumbai.maticvigil.com/`),
      network_id: 80001,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },
    
  //   ropsten: {
  //     provider: () => new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/YOUR-PROJECT-ID`),
  //     network_id: 3,       // Ropsten's id
  //     gas: 5500000,        // Ropsten has a lower block limit than mainnet
  //     confirmations: 2,    // # of confirmations to wait between deployments. (default: 0)
  //     timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
  //     skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
  //   }
    
  // },

  compilers: {
    solc: {
      version: "0.8.15"     // Fetch exact version from solc-bin (default: truffle's version)
      
    }
  }

}

