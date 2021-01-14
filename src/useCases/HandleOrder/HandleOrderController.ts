import { Request, Response } from 'express'
import HandleOrderUseCase from './HandleOrderUseCase'

class HandleOrderController {
  constructor(private handleOrderUseCase: HandleOrderUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const data = request.body
      const order = this.handleOrderUseCase.execute(data)
      return response.status(200).json(order).send()
    } catch (err) {
      return response
        .status(500)
        .json({ message: err.message || 'Unexpected Error' })
    }
  }
}

export default HandleOrderController
