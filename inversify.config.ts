import { Container } from 'inversify'
import { TYPES } from './src/models/types'
import { IProductRepository } from './src/repositories/IProductRepository'
import MySqlProductRepository from './src/repositories/implementations/MySqlProductRepository'
import GetAllProductsController from './src/useCases/GetAllProducts/GetAllProductsController'
import GetAllProductsUseCase from './src/useCases/GetAllProducts/GetAllProductsUseCase'

const myContainer = new Container()
myContainer
  .bind<IProductRepository>(TYPES.IProductRepository)
  .to(MySqlProductRepository)

myContainer
  .bind<GetAllProductsController>(TYPES.GetAllProductsController)
  .to(GetAllProductsController)

myContainer
  .bind<GetAllProductsUseCase>(TYPES.GetAllProductsUseCase)
  .to(GetAllProductsUseCase)

export { myContainer }
