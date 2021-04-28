require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid climb frame sugar fire ridge remind erosion half private blue solve'; 
let testAccounts = [
"0x0454b4da6fbfe2d3cc1915ac77300a2ada3aef7579a3d4130fff8dcc591ac77b",
"0x5b63e9eeb4e2649779a830edc8a138c4f0e84e38634b4b3d0401b448bbae2700",
"0xa650b6740ffa63160bda6ceadbe32ac755c32707491aef3da1c099a65b790da4",
"0x4f5c3b9daaefaedc9b3fcc96c8da6b6c72d448fd26a2e2c6ab1bd424ff1c400b",
"0x3856d89dacd556729f2841e33b9f3243f3aa38cd59307827f48eb052b17fb9bb",
"0xcd9dd5e12de8a7ebd74042dd6386108a1bdcfff69f5c787d799704030edff912",
"0xe8969fdd1593c8803036a95853837d656f4138e411d5b23564e436df6c72cb9f",
"0x14dfdacdf450e3569a80c3006092c914ec456f196b8350cf4dfb4aa457052fdc",
"0xf9fd89627140e8b4a6a8ec768b455cd285128d51237cfcb67c34e346df5a6821",
"0x6563d4033d24ba2db89615d6ce13b35df52035028fec919b1a0182c1e5803047"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

