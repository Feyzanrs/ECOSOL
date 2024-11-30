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
          Pet Şişe Atık Toplama
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
                <ListItemText primary='Geri dönüşüme katkı sağlar' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Çevre kirliliğini azaltır' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Doğal kaynakları korur' />
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
                <ListItemText primary='Pet şişeleri biriktirin' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Şişeleri yıkayıp temizleyin' />
              </ListItem>
              <ListItem>
                <ListItemText primary='En yakın geri dönüşüm kutusuna atın' />
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

export default PetBottleTask
