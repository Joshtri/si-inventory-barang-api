import express from 'express';
import * as itemInController from '../controllers/item.in.controller.js';
const router = express.Router();


router.get('/item-in', itemInController.getItemIn);
router.post('/item-in', itemInController.createItemIn);
router.patch('/item-in/:id', itemInController.updateItemIn);
router.delete('/item-in/:id', itemInController.deleteItemIn);
// router.get('/item-in/:id', itemInController);


export default router;