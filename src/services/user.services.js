import * as userRepository from '../repositories/user.repository.js';

export const loginUser = async (username, password) => {
    try {
      return await userRepository.loginUser(username, password);
    } catch (error) {
      throw new Error(error.message);
    }
};