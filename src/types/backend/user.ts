import { ThemeColor } from 'src/@core/layouts/types'
import { User } from '../frontend/user'

export interface UserEntity extends User {
  user_id: string
  createdAt: Date
  updatedAt: Date
}

export interface Applicant extends User {
  status: 'pending' | 'approved' | 'rejected'
}

export interface ApplicantEntity extends UserEntity, Applicant {
  avatarColor?: ThemeColor
  appliedAt: Date
}

export interface Member extends User {
  membershipStatus: 'active' | 'inactive'
}

export interface MemberEntity extends UserEntity, Member {
  approvedAt: Date
}
