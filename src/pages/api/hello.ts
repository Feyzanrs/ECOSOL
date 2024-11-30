import { NextApiRequest, NextApiResponse } from 'next/types'

type Data = {
  message: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json({ message: 'Hello, Next.js API!' })
}
