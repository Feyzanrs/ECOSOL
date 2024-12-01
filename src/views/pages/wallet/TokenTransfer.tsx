import { FC, useState } from 'react'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { transferToken } from 'src/utils/tokenTransfer'
import { Button, TextField, Box, Typography, Card, CardContent } from '@mui/material'

const TokenTransfer: FC = () => {
  const { connection } = useConnection()
  const { publicKey, sendTransaction } = useWallet()
  
  const [recipientAddress, setRecipientAddress] = useState('')
  const [amount, setAmount] = useState('')
  const [loading, setLoading] = useState(false)

  const handleTransfer = async () => {
    if (!publicKey) {
      alert('Please connect your wallet first')
      return
    }

    try {
      setLoading(true)
      const result = await transferToken(
        connection,
        {
          publicKey,
          sendTransaction
        },
        recipientAddress,
        parseFloat(amount)
      )

      if (result.success) {
        alert(`Transfer successful! Signature: ${result.signature}`)
        // Transfer başarılı olduktan sonra inputları temizle
        setRecipientAddress('')
        setAmount('')
      } else {
        alert(`Transfer failed: ${result.error}`)
      }
    } catch (error) {
      alert(`Error: ${error.message}`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" sx={{ mb: 4 }}>
          Transfer SOL
        </Typography>
        
        <TextField
          fullWidth
          label="Recipient Wallet Address"
          value={recipientAddress}
          onChange={(e) => setRecipientAddress(e.target.value)}
          sx={{ mb: 4 }}
          placeholder="Enter recipient's Solana address"
        />
        
        <TextField
          fullWidth
          label="Amount (SOL)"
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          sx={{ mb: 4 }}
          placeholder="0.1"
        />
        
        <Button
          fullWidth
          variant="contained"
          onClick={handleTransfer}
          disabled={!publicKey || loading || !recipientAddress || !amount}
        >
          {loading ? 'Processing Transfer...' : 'Send SOL'}
        </Button>

        {publicKey && (
          <Typography variant="caption" display="block" sx={{ mt: 2, textAlign: 'center' }}>
            From: {publicKey.toString()}
          </Typography>
        )}
      </CardContent>
    </Card>
  )
}

export default TokenTransfer
