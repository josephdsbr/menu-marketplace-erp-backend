import Product from '../../entity/Product'
import { IProductRepository } from '../IProductRepository'
import { getRepository } from 'typeorm'
import { injectable } from 'inversify'

@injectable()
class MySqlProductRepository implements IProductRepository {
  async findByName(name: string): Promise<Product> {
    return await getRepository(Product).findOne({ name })
  }

  async findAll(): Promise<Product[]> {
    return await getRepository(Product).find()
  }
  async findByID(id: number): Promise<Product> {
    return await getRepository(Product).findOne(id)
  }
  async save(product: Product): Promise<void> {
    try {
      await getRepository(Product).save(product)
    } catch (e) {
      console.error(e)
    }
  }
}

export default MySqlProductRepository
