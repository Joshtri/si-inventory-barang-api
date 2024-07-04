import express from 'express';
import * as productController from '../controllers/product.controller.js'
const router = express.Router();


router.get('/products', productController.getProducts)

router.get('/products/:id', productController.getProductById);
router.post('/post_products', productController.createProduct);
router.patch('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

export default router;