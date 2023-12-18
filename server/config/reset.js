import { pool } from './database.js';
import './dotenv.js';
import productsData from '../data/products.js';


const createProductsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS products; 

        CREATE TABLE IF NOT EXISTS products (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            size VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            description VARCHAR(655) NOT NULL,
            condition VARCHAR(255) NOT NULL,
            category VARCHAR(255) NOT NULL,
            color VARCHAR(255) NOT NULL,
            price DECIMAL NOT NULL,
            submittedBy VARCHAR(255) NOT NULL,
            submittedOn TIMESTAMP NOT NULL
        );
    `

    try {
        await pool.query(createTableQuery);
        console.log('Products table created successfully');
    } catch (error) {
        console.log('Error: ', error);
    }
}

const seedGiftsTable = async () => {
    await createProductsTable();

    
    productsData.forEach((product) => {
        const insertQuery = {
        text: 'INSERT INTO products (title, size, image, description, condition, category, color, price, submittedBy, submittedOn) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
        }

        const values = [
            product.title,
            product.size,
            product.image,
            product.description,
            product.condition,
            product.category,
            product.color,
            product.price,
            product.submittedBy,
            product.submittedOn
        ];

        pool.query(insertQuery, values, (err, res) => {
            if (err) {
                console.log('Error inserting products', err)
                return
            }
            console.log(`🛍️  inserted product: ${product.title}`)
        })
    })
}

seedGiftsTable();