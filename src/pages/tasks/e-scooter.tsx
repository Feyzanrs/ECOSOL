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
          Elektrikli Scooter Kullanımı
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
                <ListItemText primary='Düşük karbon ayak izi' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Trafik sorununa çözüm' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Hızlı ve pratik ulaşım' />
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
                <ListItemText primary='Scooter uygulamasını indirin' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Güvenli sürüş kurallarını öğrenin' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Uygun park alanlarını kullanın' />
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

export default EScooterTask
