import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getItemOut = async()=>{
    try {
        return await prisma.item_out.findMany();
    } catch (error) {
        throw new Error(error.message);
    }
};


export const createItemOut = async(itemOutData)=>{
    try {
        return await prisma.item_out.create({
            data:itemOutData
        });
    } catch (error) {
        throw new Error(error.message);
    }
};


export const deleteItemOut = async(id)=>{
    try {
        return await prisma.item_out.delete({
            where: id
        });
    } catch (error) {
        throw new Error(error.message);
    }
};

export const updateItemOut = async(id)=>{
    try {
        return await prisma.item_out.update({
            where: id
        });
    } catch (error) {
        throw new Error(error.message);
    }
};