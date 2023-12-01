import { pool } from './database.js'
import './dotenv.js'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'
import fs from 'fs'

const currentPath = fileURLToPath(import.meta.url)
const productsFile = fs.readFileSync(path.resolve(dirname(currentPath), '../config/data/data.json'))
const productsData = JSON.parse(productsFile)

/*
 "id": 1,
        "title": "VICTORIA VICTORIA BECKHAM",
        "price": 52.50,
        "size": " S | US4, UK8",
        "image":"https://product-images.therealreal.com/WVV30184_1_enlarged.jpg?width=1500",
        "description":"Printed Mini Dress w/ Tags",
        "fabric":"97% Polyester, 3% Elastane; Combo 100% Polyester; Combo 2 100% Polyester",
        "condition":"Pristine",
        "rating": 4.5,
        "category":"Dresses",
        "listing":"https://www.therealreal.com/products/women/clothing/dresses/victoria-victoria-beckham-printed-mini-dress-w-tags-iydna"

**/
const createProductsTable = async () => {
    const createProductsTableQuery = `
        CREATE TABLE IF NOT EXISTS products (
            id SERIAL PRIMARY KEY,
            source VARCHAR(255),
            title VARCHAR(255),
            price DECIMAL,
            size VARCHAR(255),
            image VARCHAR(255),
            description VARCHAR(255),
            fabric VARCHAR(255),
            condition VARCHAR(255),
            rating DECIMAL,
            category VARCHAR(255),
            listing VARCHAR(255)
        )
    `

    try {
        const res = await pool.query(createProductsTableQuery)
        console.log('🎉 products table created successfully', res)
    }
    catch (err) {
        console.error('⚠️ products table could not be created', err)
    }
}

const seedProductsTable = async () => {
    await createProductsTable()

    productsData.forEach((product) => {
        const insertProductQuery = `
            INSERT INTO products (source, title, price, size, image, description, fabric, condition, rating, category, listing)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        `

        const productValues = [
            product.source,
            product.title,
            product.price,
            product.size,
            product.image,
            product.description,
            product.fabric,
            product.condition,
            product.rating,
            product.category,
            product.listing
        ]

        try {
            pool.query(insertProductQuery, productValues)
            console.log(`🎉 inserted ${product.title} into products table`)
        }
        catch (err) {
            console.error(`⚠️ could not insert ${product.title} into products table`, err)
        }
    })
}

seedProductsTable()
 