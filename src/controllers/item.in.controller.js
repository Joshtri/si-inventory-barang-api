/* eslint-disable no-empty */
import * as itemInService from '../services/item.in.services.js';


export const getItemIn = async(req,res)=>{
    try {
        const response = await itemInService.getAllItemIn();
        res.status(200).json(response);
    } catch (error) {
        throw new Error(error.messsage);
    }
};