import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import productRouter from './routes/product.route.js';
import itemInRouter from './routes/item.in.route.js';
import itemOutRouter from './routes/item.out.route.js';
import userRouter from './routes/user.route.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());



app.use('/api', productRouter, itemInRouter, itemOutRouter);
app.use('/',userRouter);
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});