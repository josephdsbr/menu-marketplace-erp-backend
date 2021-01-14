import Product from '../entity/Product'

export interface IProductRepository {
  findAll(): Promise<Product[]>
  findByName(name: string): Promise<Product>
  findByID(id: number): Promise<Product>
  save(product: Product): Promise<void>
}

export default IProductRepository
