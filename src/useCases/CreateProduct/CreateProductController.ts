import { Request, Response } from 'express'
import CreateProductDTO from './CreateProductDTO'
import CreateProductUseCase from './CreateProductUseCase'

class CreateProductController {
  constructor(private createProductUserCase: CreateProductUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { body: data } = request

      await this.createProductUserCase.execute(data)

      return response.status(201).send()
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected Error',
      })
    }
  }
}

export default CreateProductController
