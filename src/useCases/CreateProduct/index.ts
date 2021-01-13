import CreateProductController from './CreateProductController'
import CreateProductUseCase from './CreateProductUseCase'
import MySqlProductRepository from '../../repositories/implementations/MySqlProductRepository'

const mySqlRepository = new MySqlProductRepository()
const createProductUseCase = new CreateProductUseCase(mySqlRepository)
const createProductController = new CreateProductController(
  createProductUseCase
)

export { createProductUseCase, createProductController }
