import GetAllProductsUseCase from '../useCases/GetAllProducts/GetAllProductsUseCase'

const TYPES = {
  IProductRepository: Symbol.for('IProductRepository'),
  GetAllProductsController: Symbol.for('GetAllProductsController'),
  GetAllProductsUseCase: Symbol.for('GetAllProductsUseCase'),
}

export { TYPES }
