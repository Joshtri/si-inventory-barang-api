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