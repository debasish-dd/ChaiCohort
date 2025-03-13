import express from 'express';
import dotenv from 'dotenv'
import cors from 'cors';


dotenv.config();

const app = express()

app.use(cors({
    origin: "http://localhost:3000",
    methods: ['GET', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}))
app.use(express.json())
app.use(express.urlencoded({
    extended:true
}))
const port = process.env.PORT||4000

app.get('/', (req, res) => {
  res.send('Cohort!')
})

app.get('/deb' , (req, res)=>{
        res.send(" Hello debasish! ")
})
app.get('/dev', (req, res)=>{
    res.send("Hello Devs")
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
