import * as userRepository from '../repositories/user.repository.js';

export const loginUser = async (username, password) => {
  try {
    return await userRepository.loginUser(username, password);
  } catch (error) {
    throw new Error(error.message);
  }
};


export const createUser = async(username,nama_lengkap,password)=>{
  try {
    return await userRepository.createUser(username,nama_lengkap,password);
  } catch (error) {
    throw new Error(error.message);
  }
};

