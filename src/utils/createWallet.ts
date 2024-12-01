const { Keypair } = require('@solana/web3.js');

module.exports = () => {
    const wallet = Keypair.generate();
    return {
        publicKey: wallet.publicKey.toString(),
        secretKey: Array.from(wallet.secretKey)
    };
};