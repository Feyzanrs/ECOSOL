// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Button from '@mui/material/Button'
import Icon from 'src/@core/components/icon'

const EScooterTask = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5' sx={{ mb: 4 }}>
          Using E-Scooter
        </Typography>
      </Grid>
      
      <Grid item xs={12} md={6}>
        <Card sx={{ height: '100%', minHeight: '400px' }}>
          <CardContent>
            <Typography variant='h6' sx={{ mb: 4 }}>
              Benefits
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary='Low carbon footprint' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Solution to traffic problems' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Fast and practical transportation' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Reduces urban congestion' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Cost-effective for short trips' />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card sx={{ height: '100%', minHeight: '400px' }}>
          <CardContent>
            <Typography variant='h6' sx={{ mb: 4 }}>
              How to Do It?
            </Typography>
            <List>
              <ListItem>
                <ListItemText 
                  primary='Download the scooter app' 
                  secondary='Register and add payment method'
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary='Learn safe riding rules' 
                  secondary='Follow traffic and safety guidelines'
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary='Use appropriate parking areas' 
                  secondary='Park in designated zones only'
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Button variant='contained' startIcon={<Icon icon='mdi:qr-code-scanner' />}>
          Scan QR Code
        </Button>
      </Grid>
    </Grid>
  )
}

export default EScooterTask
