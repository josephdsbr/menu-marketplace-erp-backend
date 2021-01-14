import { Request, Response } from 'express'

export default interface IGetAllProductsController {
  handle(request: Request, response: Response): Promise<Response>
}
