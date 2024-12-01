// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Icon from 'src/@core/components/icon'
import { useState } from 'react'
import { auth, db } from 'src/configs/firebaseConfig'
import { doc, updateDoc } from 'firebase/firestore'
import toast from 'react-hot-toast'

const WalletCard = () => {
  const [walletAddress, setWalletAddress] = useState('')
  const [loading, setLoading] = useState(false)

  const handleConnectWallet = async () => {
    try {
      setLoading(true)
      const user = auth.currentUser

      if (!user) {
        toast.error('No user logged in')
        return
      }

      // Firestore'da kullanıcı dokümanını güncelle
      await updateDoc(doc(db, 'users', user.uid), {
        walletAddress: walletAddress
      })

      // Başarılı mesajı göster
      toast.success('Wallet connected successfully!')
      
    } catch (error) {
      console.error('Error connecting wallet:', error)
      toast.error('Error connecting wallet. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <Grid container spacing={6} justifyContent="center" alignItems="center" sx={{ minHeight: '70vh' }}>
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent sx={{ textAlign: 'center', py: 10 }}>
            <Icon icon='mdi:wallet' fontSize={48} color="primary" />
            
            <Typography variant='h5' sx={{ mb: 2, mt: 4 }}>
              Connect Your Solana Wallet
            </Typography>
            
            <Typography variant='body2' sx={{ mb: 6, color: 'text.secondary' }}>
              Enter your Solana wallet address to start earning tokens for your eco-friendly activities
            </Typography>

            <TextField
              fullWidth
              label="Wallet Address"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              placeholder="Enter your Solana wallet address"
              sx={{ mb: 4 }}
            />

            <Button 
              variant='contained' 
              size="large"
              startIcon={<Icon icon='mdi:wallet-plus' />}
              onClick={handleConnectWallet}
              disabled={!walletAddress || loading}
            >
              {loading ? 'Connecting...' : 'Connect Wallet'}
            </Button>

            <Box sx={{ mt: 4 }}>
              <Typography variant='caption' color="text.secondary">
                Make sure to enter a valid Solana wallet address
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default WalletCard