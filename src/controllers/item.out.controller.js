 
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


export const deleteItemOut = async(req,res)=>{
    try {
        const id = req.params;
        const response = await itemOutService.deleteItemOut(id);
        res.status(200).json(response);
    } catch (error) {
        throw new Error(error.message);      
    }
};


export const updateItemOut = async(req,res)=>{
    try {
        const id = req.params;
        const response = await itemOutService.updateItemOut(id);
        res.status(200).json(response);
    } catch (error) {
        throw new Error(error.message);
    }
};

export const getTotalItemOut = async (req, res) => {
    try {
        const totalItemOut = await itemOutService.getTotalItemOut();
        res.status(200).json({ total: totalItemOut });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
