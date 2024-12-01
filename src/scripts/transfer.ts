const web3 = require('@solana/web3.js')
const fs = require('fs')

async function transfer() {
  const connection = new web3.Connection('https://api.devnet.solana.com', 'confirmed')
  
  const secretKeyString = fs.readFileSync('/Users/esmanursahin/my-keypair.json', 'utf8')
  const secretKey = Uint8Array.from(JSON.parse(secretKeyString))
  const fromWallet = web3.Keypair.fromSecretKey(secretKey)
  const toWallet = new web3.PublicKey('EL7AathMeg2WrCYPiE4FVVFKng8tyGgUGdwohhVaaZ7x')

  try {
    const amount = 0.1 * web3.LAMPORTS_PER_SOL
    const transaction = new web3.Transaction().add(
      web3.SystemProgram.transfer({
        fromPubkey: fromWallet.publicKey,
        toPubkey: toWallet,
        lamports: amount
      })
    )

    const signature = await web3.sendAndConfirmTransaction(
      connection,
      transaction,
      [fromWallet]
    )

    console.log('Transfer başarılı!')
    console.log('İşlem imzası:', signature)
    console.log(`${amount / web3.LAMPORTS_PER_SOL} SOL gönderildi`)
    console.log('Gönderen:', fromWallet.publicKey.toString())
    console.log('Alıcı:', toWallet.toString())

  } catch (error) {
    console.error('Transfer hatası:', error)
  }
}

transfer() 