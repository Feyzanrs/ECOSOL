import { Connection, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from '@solana/web3.js';

export async function transferSOL(
  connection: Connection,
  fromWallet: any, // Admin wallet
  toWalletAddress: string,
  amount: number // SOL amount
) {
  try {
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: fromWallet.publicKey,
        toPubkey: new PublicKey(toWalletAddress),
        lamports: amount * LAMPORTS_PER_SOL
      })
    );

    const signature = await fromWallet.sendTransaction(transaction, connection);
    await connection.confirmTransaction(signature, 'confirmed');
    
    return signature;
  } catch (error) {
    console.error('Transfer failed:', error);
    throw error;
  }
}