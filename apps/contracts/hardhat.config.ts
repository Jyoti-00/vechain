import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import '@nomiclabs/hardhat-truffle5';
import '@vechain/sdk-hardhat-plugin';

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.20',
    evmVersion: 'paris',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  mocha: {
    timeout: 180000,
  },
  networks: {
    hardhat: {
      chainId: 1337,
    },
    vechain_testnet: {
      url: 'https://testnet.vechain.org',
      accounts: {
        mnemonic: 'word1 word2 word3 ... word12', // Replace with your actual 12-word mnemonic
        count: 10,
        path: "m/44'/818'/0'/0",
      },
      restful: true,
      gasPrice: 20000000000,
      gas: 5000000,
    },
    vechain_mainnet: {
      url: 'https://mainnet.vechain.org',
      accounts: {
        mnemonic: '', // Replace with your actual 12-word mnemonicc
        count: 1,
        path: "m/44'/818'/0'/0",
      },
      restful: true,
      gas: 10000000,
    },
  },
};

export default config;
