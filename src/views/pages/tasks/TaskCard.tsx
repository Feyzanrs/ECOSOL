// ** MUI Imports
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { useRouter } from 'next/router'
import Icon from 'src/@core/components/icon'

// ** Types
import { Task } from 'src/pages/tasks'

interface Props {
  task: Task
}

const TaskCard = ({ task }: Props) => {
  const router = useRouter()

  return (
    <Card 
      sx={{ 
        cursor: 'pointer',
        height: '100%',
        minHeight: '300px',
        '&:hover': { transform: 'translateY(-5px)', transition: 'transform 0.3s' }
      }}
      onClick={() => router.push(task.route)}
    >
      <CardContent sx={{ textAlign: 'center' }}>
        <Icon icon={task.icon} fontSize={48} />
        <Typography variant='h6' sx={{ mt: 2 }}>
          {task.title}
        </Typography>
        <Typography variant='body2' sx={{ mb: 2 }}>
          {task.description}
        </Typography>
        <Typography variant='subtitle2' color='primary'>
          {task.points.toFixed(5)} Token
        </Typography>
      </CardContent>
    </Card>
  )
}

export default TaskCard