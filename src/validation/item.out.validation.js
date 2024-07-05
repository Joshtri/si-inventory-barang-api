import Joi from "joi";

export const itemOutSchema = Joi.object({
    item_code: Joi.string().max(10).required(),
    item_name: Joi.string().required(),
    quantity: Joi.number().integer().required(),
    entry_date: Joi.date().iso().required(),
    item_type: Joi.string().required(),
    keterangan: Joi.string().optional(),
    userId: Joi.number().integer().optional(),
    user_nama: Joi.string().max(50).optional(),
});