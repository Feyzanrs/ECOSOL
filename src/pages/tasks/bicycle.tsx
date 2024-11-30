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
          Bisiklet Kullanımı
        </Typography>
      </Grid>
      
      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant='h6' sx={{ mb: 4 }}>
              Faydaları
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary='Sıfır karbon emisyonu' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Fiziksel aktivite sağlar' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Ekonomik ulaşım' />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card>
          <CardContent>
            <Typography variant='h6' sx={{ mb: 4 }}>
              Nasıl Yapılır?
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary='Bisikletinizin bakımını yapın' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Güvenli rotalar belirleyin' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Güvenlik ekipmanlarını kullanın' />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12}>
        <Button variant='contained' startIcon={<Icon icon='mdi:check' />}>
          Görevi Tamamladım
        </Button>
      </Grid>
    </Grid>
  )
}

export default BicycleTask
