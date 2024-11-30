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