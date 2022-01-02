require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz arch suspect venture street cost ridge umbrella give knock equal genius'; 
let testAccounts = [
"0xa4e1cf49220b7bb9b47c6f43b4533942b568dea7365ab9980b82dc7bfb27e2ec",
"0x7b29e414c9ce2f1f698d782c2da1456c980ad2edac718d19dbf40f0bfc2f145a",
"0xcda609ea84fdfd62610069a52b43738c9f283976b8e3b1e950bedfe4e67d0f30",
"0x5587b824308e9279907a4c6b38627dd82c66408a3ea5f4f2d66d110aa855883e",
"0x0c732793ae50000099d42a0b71f2f95b974f847b9a784fcce60d039c04ed0e60",
"0x13026c422d55b1c751bed9ee1f9752457c179847380aa2c67aabe83d7b1689ca",
"0x57504c82fbf86cbfc2f1586c5cbecb9086815a30b43823f18dd5d9446ae71235",
"0x382d77e4abfb99953b122772a0e9d001d8762a6f6d6d41cd919cb7bfc547d3fc",
"0x401872f7dcf4e79af7d654db31ce998cd0a04fd86960da5100df0c1424eb7565",
"0x8e8d3cdfd30106571a1e273df968d9723cee2f8e8375ff147d6e8a6fcf9e58dd"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

