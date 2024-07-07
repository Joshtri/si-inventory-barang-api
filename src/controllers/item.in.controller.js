
import * as itemInService from '../services/item.in.services.js';


export const getItemIn = async(req,res)=>{
    try {
        const response = await itemInService.getAllItemIn();
        res.status(200).json(response);
    } catch (error) {
        throw new Error(error.messsage);
    }
};


export const createItemIn = async(req,res)=>{
    try {
        const itemInData = req.body;
        const response = await itemInService.createItemIn(itemInData);
        res.status(200).json(response);
    } catch (error) {
        throw new Error(error.message);
    }
};


export const deleteItemIn = async (req, res) => {
    try {
      const { id } = req.params;
      const response = await itemInService.deleteItemIn(id);
      res.status(200).json(response);
    } catch (error) {
      console.error('Error deleting item:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const updateItemIn = async (req, res) => {
    try {
      const { id } = req.params;
      const dataUpdated = req.body;
      const response = await itemInService.updateItemIn(id, dataUpdated);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};

export const getTotalItemIn = async (req, res) => {
    try {
        const totalItemIn = await itemInService.getTotalItemIn();
        res.status(200).json({ total: totalItemIn });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
