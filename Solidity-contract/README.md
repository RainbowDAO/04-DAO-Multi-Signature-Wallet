## Documentation on how to run the project

## Contract introduction
- Creator: The contract allows users to create their own multi-signature wallet.
- MultiSign: This is the main logical contract for multi-signature wallet and is mainly used to manage money.


## Dependencies

- Linux or Mac
- node ≥ 14

## Network & Contract
- Network Name: Rinkeby Test Network
- RPC URL: https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161

### contract address

#### Creator
0xd6BC386d072e04f2119f1Bca3bB6F61E6B0920D7

## Installing

```bash
git clone https://github.com/RainbowDAO/04-ETHDenver2022-DAO-Multi-Signature-Wallet.git
cd 03-Hackathon-DAO-multi-signature-wallet
```

Install truffle by running the command:
```bash
npm install -g truffle
```

**Note**: Only the Metamask wallet is available for this demo


## Deploy Contracts
Open a local node or complete the information in the ```truffle-config.js``` and add the mnemonic to the ```secret```

```bash
npm install -g @truffle/hdwallet-provider
truffle compile && truffle migrate
```
You will deploy contracts
- Creator

### Creator
Create multi-signature wallet, manage multi-signature wallet address, store basic information

### MultiSign
The specific logic of multiple wallets


