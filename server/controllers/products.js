import { parse } from 'dotenv'
import { pool } from '../config/database.js'

const createProduct = async (req, res) => {
    try {
        const { title, price, size, image, description, condition, category, color } = req.body

        const results = await pool.query(
            `INSERT INTO products (title, description. price, size, image, condition, category, color)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
            RETURNING *`,
            [title, price, size, image, description, condition, category, color]
        )
        res.status(201).json(results.rows[0])
    }
    catch (err) {
        console.error(err.message)
    }
}

const getProducts = async (req, res) => {
    try {
        const results = await pool.query(
            `SELECT * FROM products ORDER BY id ASC`
        )
        res.status(200).json(results.rows)
    }
    catch (err) {
        res.status(409).json({ message: err.message })
    }
}

const getProduct = async (req, res) => {
    try {
        const id = partInt(req.params.id)
        const results = await pool.query(
            `SELECT * FROM products WHERE id = $1`,
            [id]
        )
        res.status(200).json(results.rows[0])
    }
    catch (err) {
        res.status(409).json({ message: err.message })
    }
}

const updateProduct = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const { title, price, size, image, description, condition, category, color } = req.body
        const results = await pool.query(
            `UPDATE products SET title = $1, price = $2, size = $3, image = $4, description = $5, condition = $6, category = $7, color = $8 WHERE id = $9`,
            [title, price, size, image, description, condition, category, color, id]
        )
        res.status(200).json(results.rows[0])
    }
    catch (err) {
        res.status(409).json({ message: err.message })
    }
}

const deleteProduct = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const results = await pool.query(
            `DELETE FROM products WHERE id = $1`,
            [id]
        )
        res.status(200).json(results.rows[0])
    }
    catch (err) {
        res.status(409).json({ message: err.message })
    }
}

export default{
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct
}

