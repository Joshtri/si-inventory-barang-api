import * as userService from '../services/user.services.js';
import { loginUserSchema,createUserSchema } from '../validation/user.validation.js';

export const loginUser = async (req, res) => {
  const { username, password } = req.body;

  // Validate input
  const { error } = loginUserSchema.validate({ username, password });
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const user = await userService.loginUser(username, password);
    res.status(200).json({ user });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};


export const createUser = async (req, res) => {
  const { nama_lengkap, username, password } = req.body;

  // Validate input
  const { error } = createUserSchema.validate({ nama_lengkap, username, password });
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const newUser = await userService.createUser(nama_lengkap, username, password);
    res.status(201).json({ user: newUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};