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

const BicycleTask = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5' sx={{ mb: 4 }}>
          Using Bicycle
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
                <ListItemText primary='Zero carbon emissions' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Provides physical activity' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Economic transportation' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Reduces traffic congestion' />
              </ListItem>
              <ListItem>
                <ListItemText primary='No noise pollution' />
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
                  primary='Maintain your bicycle' 
                  secondary='Ensure your bike is in good condition'
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary='Plan safe routes' 
                  secondary='Choose bike-friendly roads and paths'
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary='Use safety equipment' 
                  secondary='Wear a helmet and use lights when needed'
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

export default BicycleTask
