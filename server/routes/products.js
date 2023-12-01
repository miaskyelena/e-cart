import express from 'express'

import ProductsController from '../controllers/products.js'

const router = express.Router()

router.get('/', ProductsController.getProducts)
router.get('/:id', ProductsController.getProduct)
router.post('/', ProductsController.createProduct)
router.patch('/:id', ProductsController.updateProduct)
router.delete('/:id', ProductsController.deleteProduct)

export default router;