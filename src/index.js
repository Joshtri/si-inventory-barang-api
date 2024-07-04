import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import productRouter from './routes/product.route.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())



app.use('/api', productRouter);
app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
});