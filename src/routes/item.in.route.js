import express from 'express';
import * as itemInController from '../controllers/item.in.controller.js';
const router = express.Router();


router.get('/item-in', itemInController.getItemIn);

export default router;