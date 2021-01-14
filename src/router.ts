import { Router, Request, Response } from 'express'
import { createProductController } from './useCases/CreateProduct'
import HandleOrderController from './useCases/HandleOrder/HandleOrderController'
import GetAllProductsController from './useCases/GetAllProducts/GetAllProductsController'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { myContainer } from '../inversify.config'
import { TYPES } from './models/types'

const router = Router()

router.post('/products', (request: Request, response: Response) => {
  return createProductController.handle(request, response)
})

router.get('/products', (request: Request, response: Response) => {
  const getAllProductsController = myContainer.get<GetAllProductsController>(
    TYPES.GetAllProductsController
  )
  return getAllProductsController.handle(request, response)
})

router.post('/order', (request: Request, response: Response) => {
  return HandleOrderController
})

export { router }
