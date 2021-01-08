import { NextApiRequest, NextApiResponse } from 'next'
import type { Timer } from 'types/models'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function postTimers(req: NextApiRequest, res: NextApiResponse) {
  const { body } = req
  const newTimerData: Timer = {
    name: body.name || '',
    hours: parseInt(body.hours || '0'),
    minutes: parseInt(body.minutes || '0'),
  }

  try {
    const createdTimer = await prisma.timer.create({ data: newTimerData })
    res.status(200).json(createdTimer)
  } catch (e) {
    console.log(e)
    if (e.code === 'P2002') {
      return res
        .status(500)
        .json({ message: 'A timer with the same name already exists' })
    }

    return res.status(500).json({ message: e.message })
  }
}

export default async function timersHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req

  if (method === 'POST') {
    await postTimers(req, res)
    return
  }
}
