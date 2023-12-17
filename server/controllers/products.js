import { pool } from '../config/database.js';

const getProducts = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM products ORDER BY id ASC');
        res.status(200).json(results.rows);
    } catch (error) {
        res.status(400).json({ error: error })
    }
}

const getProductById = async (req, res) => {
    try { 
        const productId = req.params.productId;
        const selectQuery = `SELECT title, size, image, description, condition, category, color, price, submittedBy, submittedOn FROM products WHERE id = ${productId}`;
        const results = await pool.query(selectQuery);

        res.status(200).json(results.rows[0]);
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

const createProduct = async (req, res) => {
    try { 
        const { title, size, image, description, condition, category, color, price, submittedBy, submittedOn } = req.body;
        const results = await pool.query(`
            INSERT INTO products (title, size, image, description, condition, category, color, price, submittedBy, submittedOn)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
            RETURNING *`,
            [title, size, image, description, condition, category, color, price, submittedBy, submittedOn]
            )
        res.status(201).json(results.rows[0]);
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

const updateProduct = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const { title, size, image, description, condition, category, color, price, submittedBy, submittedOn } = req.body;
        const results = await pool.query(`
            UPDATE products SET title = $1, size = $2, image = $3, description = $4, condition = $5, category = $6, color = $7, price = $8, submittedBy = $9, submittedOn = $10 WHERE id = $11`,
            [title, size, image, description, condition, category, color, price, submittedBy, submittedOn, id]
            )
        res.status(200).json(results.rows[0]);
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

const updateProductLikes = async (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const { likes } = req.body;
        const results = await pool.query(`
            UPDATE products SET likes = $1 WHERE id = $2`,
            [likes, id]
            )
        res.status(200).json(results.rows[0]);
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

const deleteProduct = async (req, res) => {
    try { 
        const id = parseInt(req.params.id)
        const results = await pool.query('DELETE FROM products WHERE id = $1', [id])
        res.status(200).json(results.rows[0]);
    } catch (error) {
        res.status(409).json({ error: error.message })
    }
}

export default {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
    updateProductLikes
}

