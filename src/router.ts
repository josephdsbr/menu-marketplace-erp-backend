import { Router, Request, Response } from 'express'

const router = Router()

router.get('/', (request: Request, response: Response) => {
  const t = 1
  return response.json('Hello World')
})

export { router }
