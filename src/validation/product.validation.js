import Joi from 'joi';

export const productSchema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    price: Joi.number().positive().required(),
    // description: Joi.string().max(255),
    // Tambahkan validasi untuk atribut lain sesuai kebutuhan
});
