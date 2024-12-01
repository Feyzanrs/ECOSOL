// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'

const Home = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='Why Are These Tasks Important?
'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>All the best for your new project.</Typography>
            <Typography>
For a Cleaner World: Recycling prevents plastics and other waste from harming the environment. By recycling just one plastic bottle, you can help reduce the damage to nature.
To Reduce Your Carbon Footprint: Using public transportation or riding a bicycle significantly reduces carbon emissions compared to individual car usage.
For Future Generations: Every eco-friendly step you take today contributes to a more livable world for our children.

            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Card>
          <CardHeader title='What Does This Platform Offer You'></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>
Rewards for Eco-Friendly Actions: Earn Solana tokens by recycling, using bicycles or public transportation, and engaging in other environmentally-friendly behaviors.
Big Impact Through Small Changes: This journey starts with small tasks and opens the door to significant changes.            </Typography>
            <Typography>Please read our Authentication and ACL Documentations to get more out of them.</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Home
