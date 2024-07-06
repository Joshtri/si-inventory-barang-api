import Joi from 'joi';

export const loginUserSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required()
});

export const createUserSchema = Joi.object({
  nama_lengkap: Joi.string().min(3).required(),
  username: Joi.string().min(3).required(),
  password: Joi.string().required(),
});