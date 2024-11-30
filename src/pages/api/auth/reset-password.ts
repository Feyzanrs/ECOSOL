import { FirebaseError } from 'firebase/app'
import { sendPasswordResetEmail } from 'firebase/auth'
import { NextApiRequest, NextApiResponse } from 'next/types'
import { auth } from 'src/configs/firebaseConfig'
import { ResetPasswordRequest, ResetPasswordResponse } from 'src/types/backend/auth'

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResetPasswordResponse>) {
  if (req.method === 'POST') {
    const { email }: ResetPasswordRequest = req.body

    try {
      await sendPasswordResetEmail(auth, email)
      res.status(200).json({ success: true })
    } catch (error) {
      const firebaseError = error as FirebaseError
      res.status(400).json({
        error: firebaseError
      })
    }
  } else {
    res.status(405).end() // Metod izin verilmiyor
  }
}
