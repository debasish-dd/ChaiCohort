import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import db from './utils/db.js'
import cookieParser from 'cookie-parser'


// Import all routes
import userRouter from './routes/user.route.js'

dotenv.config()

const app = express()

app.use(
  cors({
    origin: process.env.BASE_LINK,
    methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
)
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(cookieParser())

const port = process.env.PORT || 4000

app.get('/', (req, res) => {
  res.send('Cohort!')
})

app.get('/deb', (req, res) => {
  res.send(' Hello debasish! ')
})
app.get('/dev', (req, res) => {
  res.send('Hello Devs')
})

//connect to db
db()

//user routes
app.use('/api/v1/users', userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
