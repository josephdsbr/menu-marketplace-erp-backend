import { Router, Request, Response } from 'express'
import { createProductController } from './useCases/CreateProduct'

const router = Router()

router.post('/products', (request: Request, response: Response) => {
  return createProductController.handle(request, response)
})

export { router }
