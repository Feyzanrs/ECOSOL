// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

// ** Custom Components
import TaskCard from 'src/views/pages/tasks/TaskCard'
// ** Types
export interface Task {
  id: number
  title: string
  description: string
  icon: string
  points: number
  route: string
  details: {
    benefits: string[]
    howTo: string[]
    impact: string
  }
}

const tasks: Task[] = [
  {
    id: 1,
    title: 'Using Public Transport',
    description: 'Use public transport to reduce your carbon footprint',
    icon: 'mdi:bus',
    points: 0.0005,
    route: '/tasks/public-transport',
    details: {
      benefits: [
        'Reduces carbon emissions',
        'Reduces traffic congestion',
        'Economical'
      ],
      howTo: [
        'Plan your route',
        'Prepare your transit card',
        'Find the nearest stop'
      ],
      impact: 'Each time you use public transport, you save approximately 2.5kg of CO2'
    }
  },
  {
    id: 2,
    title: 'Using E-Scooter',
    description: 'Use e-scooters for short distance travel to reduce emissions',
    icon: 'mdi:scooter-electric',
    points: 0.0010,
    route: '/tasks/e-scooter',
    details: {
      benefits: [
        'Low carbon footprint',
        'Solution to traffic problems',
        'Fast and practical transportation'
      ],
      howTo: [
        'Download the scooter app',
        'Learn safe riding rules',
        'Use appropriate parking areas'
      ],
      impact: 'Using an e-scooter instead of a car for short trips can reduce your carbon emissions by up to 75%'
    }
  },
  {
    id: 3,
    title: 'Using Bicycle',
    description: 'Choose cycling for a healthier lifestyle and zero emissions',
    icon: 'mdi:bike',
    points: 0.0010,
    route: '/tasks/bicycle',
    details: {
      benefits: [
        'Zero carbon emissions',
        'Improves physical health',
        'Cost-effective transportation'
      ],
      howTo: [
        'Maintain your bicycle',
        'Plan safe routes',
        'Use safety equipment'
      ],
      impact: 'Cycling instead of driving can save approximately 250g of CO2 per kilometer'
    }
  },
  {
    id: 4,
    title: 'Recycling PET Bottles',
    description: 'Recycle PET bottles to reduce plastic waste',
    icon: 'mdi:bottle-soda-outline',
    points: 0.00043,
    route: '/tasks/pet-bottle',
    details: {
      benefits: [
        'Reduces plastic waste',
        'Saves energy resources',
        'Prevents ocean pollution'
      ],
      howTo: [
        'Clean the bottles',
        'Remove caps and labels',
        'Take to recycling point'
      ],
      impact: 'Recycling one PET bottle saves enough energy to power a light bulb for 3 hours'
    }
  }
]

const TasksPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>Environmental Friendly Tasks</Typography>
        <Typography variant='body2' sx={{ mb: 4 }}>
          Tasks you can do to protect our planet
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