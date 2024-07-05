/* eslint-disable no-empty */
import * as itemOutRepository from '../repositories/item.out.repository.js';
import { itemOutSchema } from '../validation/item.out.validation.js';

export const getAllItemOut = async ()=>{
    try {
        const itemOutData = itemOutRepository.getItemOut();
        return itemOutData;
    } catch (error) {
        throw new Error(error.message);
    }
};


export const createItemOut = async(itemOutData)=>{
        
    const {error} =  itemOutSchema.validate(itemOutData);
    if (error) {
        throw new Error(error.details[0].message);
    }
    try {
        return await itemOutRepository.createItemOut(itemOutData);
    } catch (error) {
        throw new Error(error.message);
    }
};

export const updateItemOut = async(id)=>{
    try {
        return await itemOutRepository.updateItemOut(id);
    } catch (error) {
        throw new Error(error.message);
    }
};

export const deleteItemOut = async(id)=>{
    try {
        return await itemOutRepository.deleteItemOut(id);
    } catch (error) {
        throw new Error(error.message);      
    }
};