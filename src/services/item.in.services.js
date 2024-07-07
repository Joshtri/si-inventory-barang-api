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

export const updateItemIn = async (id, data) => {
    try {
      return await itemInRepository.updateItemIn(id, data);
    } catch (error) {
      throw new Error(error.message);
    }
};

export const deleteItemIn = async(id)=>{
    const parsedId = parseInt(id, 10);

    if (isNaN(parsedId)) {
      throw new Error('Invalid ID');
    }
  
    try {
      return await itemInRepository.deleteItemIn(parsedId);
    } catch (error) {
      throw new Error(error.message);
    }
};

export const getTotalItemIn = async () => {
    try {
        const totalItemIn = await itemInRepository.getTotalItemIn();
        return totalItemIn;
    } catch (error) {
        throw new Error(error.message);
    }
};