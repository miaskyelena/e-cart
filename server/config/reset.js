import { pool } from './database.js'
import './dotenv.js'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import fs from 'fs'

const currentPath = fileURLToPath(import.meta.url)
const productsFile = fs.readFileSync(path.resolve(dirname(currentPath), '../config/data/data.json'))
const productsData = JSON.parse(productsFile)

const createProductsTable = async () => {
  const createProductsTableQuery = `
    CREATE TABLE IF NOT EXISTS products (
      id serial PRIMARY KEY,
      title varchar(255) NOT NULL,
      size varchar(255) NOT NULL,
      image varchar(255) NOT NULL,
      description varchar(255) NOT NULL,
      condition varchar(255) NOT NULL,
      category varchar(255) NOT NULL,
      color varchar(255) NOT NULL,
      price money NOT NULL
    );
  `
  try {
    const res = await pool.query(createProductsTableQuery)
    console.log('🛍️  products table created!')
  }
  catch (err) {
    console.error('🛍️  could not create products table', err)
    throw err
  }
}

const seedProductsTable = async () => {
  await createProductsTable()

  productsData.forEach((product) => {
   const insertQuery = {
    text: 'INSERT INTO products (title, size, image, description, condition, category, color, price) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
   }

    const values = [
      product.title,
      product.size,
      product.image,
      product.description,
      product.condition,
      product.category,
      product.color,
      product.price
    ]

    try {
      pool.query(insertQuery, values)
      console.log(`🛍️  inserted product: ${product.title}`)
    }

    catch (err) {
      console.error(`🛍️  could not insert product: ${product.title}`)
      throw err
    }

  })
}

seedProductsTable()

