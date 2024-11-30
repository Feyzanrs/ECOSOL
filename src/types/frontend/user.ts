export interface Stacks {
  Languages: string[]
  Hosting_SaaS: string[]
  Frameworks_Platforms_Libraries: string[]
  Servers: string[]
  Databases_ORM: string[]
  DESIGN: string[]
  ML_DL: string[]
  CI_CD: string[]
  VCS: string[]
  OTHER: string[]
}

export interface SocialMedia {
  linkedin: string
  github: string
  portfolio?: string
}

export interface User {
  name: string
  surname: string
  phone: string
  age: number
  email: string
  subject: string[]
  job: string
  experience: string
  location: string
  school: string
  birthday: Date
  graduationYear: Date
  stack: Stacks
  gender: string
  cv?: string
  photo?: string
  socialMedia?: SocialMedia
}
