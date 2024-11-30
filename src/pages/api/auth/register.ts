import { FirebaseError } from 'firebase/app'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { NextApiRequest, NextApiResponse } from 'next/types'
import { auth } from 'src/configs/firebaseConfig'
import { RegisterRequest, RegisterResponse } from 'src/types/backend/auth'

export default async function handler(req: NextApiRequest, res: NextApiResponse<RegisterResponse>) {
  if (req.method === 'POST') {
    const { email, password }: RegisterRequest = req.body

    await createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const user = userCredential.user
        res.status(200).json({
          user: {
            id: user.uid,
            email: user.email || '',
            username: user.displayName || ''
          }
        })
      })
      .catch((error: FirebaseError) => {
        res.status(401).json({
          error: error
        })
      })
  } else {
    res.status(405).end() // Metod izin verilmiyor
  }
}
