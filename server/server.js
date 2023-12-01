import express from 'express'
import cors from 'cors'

import productRoutes from './routes/products.js'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

app.use('/api/products', productRoutes)

app.get('/', (req, res) => {
    res.send('Hello from Express!')
}
)

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))



