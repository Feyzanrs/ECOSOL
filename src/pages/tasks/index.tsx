// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

// ** Custom Components
import TaskCard from 'src/views/pages/tasks/TaskCard'
// ** Types
import { Task } from 'src/types/frontend/tasks'

const tasks: Task[] = [
  {
    id: 1,
    title: 'Toplu Taşıma Kullanma',
    description: 'Karbon ayak izinizi azaltmak için toplu taşıma kullanın Her toplu taşıma kullanımınızda yaklaşık 2.5kg CO2 tasarrufu sağlarsınız',
    icon: 'mdi:bus',
    points: 50,
    route: '/tasks/public-transport',
    details: {
      benefits: [
        'Karbon emisyonunu azaltır',
        'Trafik yoğunluğunu azaltır',
        'Ekonomiktir'
      ],
      howTo: [
        'Güzergahınızı planlayın',
        'Toplu taşıma kartınızı hazırlayın',
        'Size en yakın durağı belirleyin'
      ],
      impact: 'Her toplu taşıma kullanımınızda yaklaşık 2.5kg CO2 tasarrufu sağlarsınız'
    }
  },
  // Diğer görevler benzer şekilde eklenecek...
]

const TasksPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>Çevre Dostu Görevler</Typography>
        <Typography variant='body2' sx={{ mb: 4 }}>
          Dünyamızı korumak için yapabileceğiniz görevler
        </Typography>
      </Grid>
      {tasks.map(task => (
        <Grid item xs={12} sm={6} md={4} key={task.id}>
          <TaskCard task={task} />
        </Grid>
      ))}
    </Grid>
  )
}

export default TasksPage