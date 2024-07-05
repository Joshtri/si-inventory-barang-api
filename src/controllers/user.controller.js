import * as userService from '../services/user.services.js';
import { loginUserSchema } from '../validation/user.validation.js';

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // Validate input
  const { error } = loginUserSchema.validate({ email, password });
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }

  try {
    const user = await userService.loginUser(email, password);
    res.status(200).json({ user });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
};