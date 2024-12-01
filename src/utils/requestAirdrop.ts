import { Connection, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';

async function requestAirdrop(walletAddress: string) {
    const connection = new Connection('https://api.devnet.solana.com', 'confirmed');
    const publicKey = new PublicKey(walletAddress);
    
    try {
        const airdropSignature = await connection.requestAirdrop(
            publicKey,
            LAMPORTS_PER_SOL
        );
        
        await connection.confirmTransaction({
            signature: airdropSignature,
            blockhash: (await connection.getLatestBlockhash()).blockhash,
            lastValidBlockHeight: (await connection.getLatestBlockhash()).lastValidBlockHeight
        });
        
        console.log('Airdrop başarılı!');
    } catch (error) {
        console.error('Airdrop hatası:', error);
    }
}

module.exports = { requestAirdrop };