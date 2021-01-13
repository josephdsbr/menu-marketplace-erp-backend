import Product from '../../entity/Product'
import { IProductRepository } from '../IProductRepository'
import { getRepository } from 'typeorm'

export class MySqlProductRepository implements IProductRepository {
  repository = getRepository(Product)

  async findAll(): Promise<Product[]> {
    return await this.repository.find()
  }
  async findByID(id: number): Promise<Product> {
    return await this.repository.findOne(id)
  }
  async save(product: Product): Promise<void> {
    try {
      await this.repository.save(product)
    } catch (e) {
      console.error(e)
    }
  }
}
