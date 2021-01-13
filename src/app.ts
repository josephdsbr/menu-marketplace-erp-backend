import 'dotenv/config'
import express from 'express'
import { router } from './router'
import cors from 'cors'
import { createConnection } from 'typeorm'
const app = express()

createConnection().then((connection) => {
  console.log('Database connected')
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(cors())
  app.use(router)
})

export { app }
