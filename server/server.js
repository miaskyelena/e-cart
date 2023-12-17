import express from 'express'
import './config/dotenv.js'
import cors from 'cors'
import ProductsRouter from './routes/products.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/products', ProductsRouter)

app.get('/', (req, res) => {
    res.status(200).send('Welcome to the eCart API')
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})