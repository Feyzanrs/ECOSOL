const { Connection, PublicKey, LAMPORTS_PER_SOL } = require('@solana/web3.js');

async function main() {
    // Devnet bağlantısı oluştur
    const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
    
    // Cüzdan adresini kullan
    const publicKey = new PublicKey('EL7AathMeg2WrCYPiE4FVVFKng8tyGgUGdwohhVaaZ7x');

    try {
        const balance = await connection.getBalance(publicKey);
        console.log(`Cüzdan Adresi: ${publicKey.toString()}`);
        console.log(`Bakiye: ${balance / LAMPORTS_PER_SOL} SOL`);
    } catch (error) {
        console.error('Hata:', error);
    }
}

main();