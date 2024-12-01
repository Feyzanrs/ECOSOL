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

const PublicTransportTask = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5' sx={{ mb: 4 }}>
          Using Public Transport
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
                <ListItemText primary='Reduces carbon emissions' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Reduces air pollution' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Provides energy efficiency' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Reduces traffic congestion' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Economical transportation' />
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
                  primary='Board the public transport' 
                  secondary='Locate the payment area near the entrance'
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary='Scan the QR code next to the payment terminal' 
                  secondary='Ensure your device is ready to process the transaction'
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary='Wait for the confirmation of your transaction' 
                  secondary='A notification will indicate the payment is successful'
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

export default PublicTransportTask
