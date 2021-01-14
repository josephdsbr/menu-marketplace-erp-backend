import { Request, Response } from 'express'
import GetAllProductsUseCase from './GetAllProductsUseCase'
import { inject, injectable } from 'inversify'
import { TYPES } from '../../models/types'

@injectable()
class GetAllProductsController {
  constructor(
    @inject(TYPES.GetAllProductsUseCase)
    private getAllProductsUseCase: GetAllProductsUseCase
  ) {}

  async handle(_: Request, response: Response): Promise<Response> {
    try {
      const products = await this.getAllProductsUseCase.execute()
      return response.status(200).json(products).send()
    } catch (err) {
      return response
        .status(500)
        .json({ message: err.message || 'Unexpected Error' })
    }
  }
}

export default GetAllProductsController
