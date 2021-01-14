import { Router, Request, Response } from 'express'
import { createProductController } from './useCases/CreateProduct'
import { getAllProductsController } from './useCases/GetAllProducts'

const router = Router()

router.post('/products', (request: Request, response: Response) => {
  return createProductController.handle(request, response)
})

router.get('/products', (request: Request, response: Response) => {
  return getAllProductsController.handle(request, response)
})

export { router }
