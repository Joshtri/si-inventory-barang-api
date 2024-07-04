/* eslint-disable no-useless-catch */
import { PrismaClient } from '@prisma/client';
// import { productSchema } from '../validation/product.validation.js';

const prisma = new PrismaClient();


export const getAllProducts = async()=>{
    try {
        return await prisma.product.findMany();
    } catch (error) {
        throw error;
    }
};


export const createProduct = async(productData)=>{
    try {
        return await prisma.product.create({
            data: productData,
        });
    } catch (error) {
        throw new Error(error.message);
    }
};