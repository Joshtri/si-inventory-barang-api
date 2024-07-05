/* eslint-disable no-empty */
import * as itemOutService from '../services/item.out.services.js';


export const getItemOut = async(req,res)=>{
    try {
        const response = await itemOutService.getAllItemOut();
        res.status(200).json(response);
    } catch (error) {
        throw new Error(error.messsage);
    }
};

export const createItemout = async(req,res)=>{
    try {
        const itemOutData = req.body;
        const response = await itemOutService.createItemOut(itemOutData);

        res.status(201).json(response);

    } catch (error) {
        throw new Error(error.messsage);
    }
};