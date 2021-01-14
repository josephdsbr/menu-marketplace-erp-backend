import GetAllProductsController from './GetAllProductsController'
import GetAllProductsUseCase from './GetAllProductsUseCase'
import MySqlProductRepository from '../../repositories/implementations/MySqlProductRepository'

const mySqlRepository = new MySqlProductRepository()
const getAllProductsUseCase = new GetAllProductsUseCase(mySqlRepository)
const getAllProductsController = new GetAllProductsController(
  getAllProductsUseCase
)

export { getAllProductsUseCase, getAllProductsController }
