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
      id SERIAL PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      price MONEY NOT NULL,
      size VARCHAR(255) NOT NULL,
      image VARCHAR(255) NOT NULL,
      description VARCHAR(255) NOT NULL,
      condition VARCHAR(255) NOT NULL,
      category VARCHAR(255) NOT NULL,
      color VARCHAR(255) NOT NULL
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
    const insertQuery = `
      INSERT INTO products (title, price, size, image, description, condition, category, color)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
    `
    const values = [
      product.title,
      product.price,
      product.size,
      product.image,
      product.description,
      product.condition,
      product.category,
      product.color
    ]
    pool.query(insertQuery, values)

    console.log(`🛍️  seeded ${product.title}`)
  })
}

seedProductsTable()
