import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export const getAllItemIn = async()=>{
    try {
        return await prisma.item_in.findMany();
    } catch (error) {
     throw new Error(error.message);   
    }
};

export const createItemIn = async(itemInData)=>{
    try {
        return await prisma.item_in.create({
            data:itemInData
        });
    } catch (error) {
        throw new Error(error.message);
    }
};


export const deleteItemIn = async(id)=>{
    try {
        return await prisma.item_in.delete({
            where: id
        });
    } catch (error) {
        throw new Error(error.message);
    }
};

export const updateItemIn = async(id)=>{
    try {
        return await prisma.item_in.update({
            where: id
        });
    } catch (error) {
        throw new Error(error.message);
    }
};