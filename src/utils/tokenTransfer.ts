import { Connection, PublicKey, Transaction, SystemProgram, LAMPORTS_PER_SOL } from '@solana/web3.js'

export const transferToken = async (
  connection: Connection,
  fromWallet: any,
  toAddress: string,
  amount: number
) => {
  try {
    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: fromWallet.publicKey,
        toPubkey: new PublicKey(toAddress),
        lamports: amount * LAMPORTS_PER_SOL // SOL'u lamports'a çeviriyoruz
      })
    )

    const signature = await fromWallet.sendTransaction(transaction, connection)
    
    // Transaction'ı onaylıyoruz
    await connection.confirmTransaction(signature, 'confirmed')
    
    return {
      success: true,
      signature
    }
  } catch (error) {
    console.error('Transfer error:', error)
    return {
      success: false,
      error: error.message
    }
  }
}
