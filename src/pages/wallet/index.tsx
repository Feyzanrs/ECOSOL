import Grid from '@mui/material/Grid'
import WalletCard from 'src/views/pages/wallet/WalletCard'
import TokenTransfer from 'src/views/pages/wallet/TokenTransfer'

const WalletPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} md={6}>
        <WalletCard />
      </Grid>
      <Grid item xs={12} md={6}>
        <TokenTransfer />
      </Grid>
    </Grid>
  )
}

export default WalletPage 