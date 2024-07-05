/* eslint-disable no-empty */
import * as itemInRepository from '../repositories/item.in.repository.js';
import { itemInSchema } from '../validation/item.in.validation.js';


export const getAllItemIn = async ()=>{
    try {
        const itemInData = itemInRepository.getAllItemIn();
        return itemInData;
    } catch (error) {
        throw new Error(error.message);
    }
};


export const createItemIn = async(itemInData)=>{
        
    const {error} =  itemInSchema.validate(itemInData);
    if (error) {
        throw new Error(error.details[0].message);
    }
    try {
        return await itemInRepository.createItemIn(itemInData);
    } catch (error) {
        throw new Error(error.message);
    }
};

export const updateItemIn = async(id)=>{
    try {
        return await itemInRepository.updateItemIn(id);
    } catch (error) {
        throw new Error(error.message);
    }
};

export const deleteItemIn = async(id)=>{
    try {
        return await itemInRepository.deleteItemIn(id);
    } catch (error) {
        throw new Error(error.message);      
    }
};