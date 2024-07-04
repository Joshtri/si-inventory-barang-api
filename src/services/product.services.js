import * as productRepository from '../repositories/product.repository.js';
import { productSchema } from '../validation/product.validation.js';


export const getProducts = async () => {
    try {
        return await productRepository.getAllProducts();
    } catch (error) {
        throw new Error(error.message);
    }
};


export const createProduct = async (productData) => {
    const { error } = productSchema.validate(productData);
    if (error) {
        throw new Error(error.details[0].message);
    }

    try {
        return await productRepository.createProduct(productData);
    } catch (error) {
        throw new Error(error.message);
    }
};