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
          Toplu Taşıma Kullanma
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
                <ListItemText primary='Karbon salınımını azaltır' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Hava kirliliğini azaltır' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Enerji verimliliği sağlar' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Trafik yoğunluğunu azaltır' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Doğal kaynakların korunmasına yardımcı olur' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Gürültü kirliliğini azaltır' />
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
                <ListItemText 
                  primary='Güzergahınızı planlayın' 
                  secondary='Gideceğiniz yere uygun toplu taşıma aracını seçin'
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary='Toplu taşıma kartınızı hazırlayın' 
                  secondary='Kartınızda yeterli bakiye olduğundan emin olun'
                />
              </ListItem>
              <ListItem>
                <ListItemText 
                  primary='Kart okutma cihazının yanındaki QR kodu okutun' 
                  secondary='Görevi tamamlamak ve ödülünüzü kazanmak için QR kodu tarayın'
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
        <Button variant='contained' startIcon={<Icon icon='mdi:qr-code-scanner' />}>
          QR Kodu Tara
        </Button>
      </Grid>
    </Grid>
  )
}

export default PublicTransportTask
