import express from 'express'
import cors from 'cors'

import productRoutes from './routes/products.js'

const CLIENT_URL = process.env.NODE_ENV === 'production' ? 'https://ecart-server.up.railway.app' : 'http://localhost:3001'
const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cors({
    origin: CLIENT_URL,
    methods: 'GET, POST, PATCH, DELETE',
    credentials: true
}))

// app routes
app.use('/api/products', productRoutes)

app.get('/', (req, res) => {
    res.send('Hello from Express!')
}
)

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))



