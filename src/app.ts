import 'dotenv/config'
import express from 'express'
import { router } from './router'
import cors from 'cors'
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())
app.use(router)

export { app }
