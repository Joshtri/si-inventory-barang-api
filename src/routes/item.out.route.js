import express from 'express';
import * as itemOutController from '../controllers/item.out.controller.js';
// import { totalItemOut } from '../repositories/item.out.repository.js';
const router = express.Router();


router.get('/item-out', itemOutController.getItemOut);
router.post('/item-out', itemOutController.createItemout);
router.patch('/item-out/:id', itemOutController.updateItemOut);
router.delete('/item-out/:id', itemOutController.deleteItemOut);
router.get('/total-item-out', itemOutController.getTotalItemOut);


export default router;