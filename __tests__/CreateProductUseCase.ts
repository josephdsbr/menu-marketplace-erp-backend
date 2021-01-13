import request from 'supertest'
import { app } from '../src/app'

describe('Route testing', () => {
  it('Should return an HTTP 400 because body is empty', async () => {
    const res = await request(app).post('/products')
    expect(res.status).toEqual(400)
  })
})
