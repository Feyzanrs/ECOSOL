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

const PetBottleTask = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5' sx={{ mb: 4 }}>
          Recycling PET Bottles
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
                <ListItemText primary='Reduces plastic waste in landfills' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Saves energy resources' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Prevents ocean pollution' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Reduces CO2 emissions' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Supports circular economy' />
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
                  primary='Clean the bottles' 
                  secondary='Rinse bottles to remove any residue'
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary='Remove caps and labels' 
                  secondary='Separate different materials for proper recycling'
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary='Take to recycling point' 
                  secondary='Find the nearest recycling machine or collection point'
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

export default PetBottleTask
