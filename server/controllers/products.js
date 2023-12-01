import { pool } from '../config/database.js'

const createProduct = async (req, res) => {
    try {
        const { source, title, price, size, image, description, fabric, condition, rating, category, listing } = req.body
       
        const results = await pool.query(
            `INSERT INTO products (source, title, price, size, image, description, fabric, condition, rating, category, listing)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
            [key, title, price, size, image, description, fabric, condition, rating, category, listing]
        )
    }
    catch (error) {
        res.status(409).json({ message: error.message })
    }
}

const getProducts = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM products ORDER BY id ASC')
        res.status(200).json(results.rows)
    }
    catch (error) {
        res.status(404).json({ message: error.message })
    }
}

const getProduct = async (req, res) => {
    try {
        const id = parstInt(req.params.id)
        const results = await pool.query('SELECT * FROM products WHERE id = $1', [id])
        res.status(200).json(results.rows[0])
    }
    catch (error) {
        res.status(409).json({ message: error.message })
    }
}

const updateProduct = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const { title, price, size, image, description, fabric, condition, rating, category, listing } = req.body

        const results = await pool.query(
            `UPDATE products SET title = $1, price = $2, size = $3, image = $4, description = $5, fabric = $6, condition = $7, rating = $8, category = $9, listing = $10 WHERE id = $11`,
            [title, price, size, image, description, fabric, condition, rating, category, listing, id]
        )
        res.status(200).json(results.rows[0])
    }
    catch (error) {
        res.status(409).json({ message: error.message })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const results = await pool.query('DELETE FROM products WHERE id = $1', [id])
        res.status(200).json(results.rows[0])
    }
    catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export default {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
}