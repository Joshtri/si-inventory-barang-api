import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export const loginUser = async (username, password) => {
  try {
    const user = await prisma.user.findUnique({
      where: { username: username }
    });

    if (!user) {
      throw new Error('User not found');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};


export const createUser = async (nama_lengkap,username, password) => {
  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        nama_lengkap:nama_lengkap,
        username: username,
        password: hashedPassword,
      },
    });

    return newUser;
  } catch (error) {
    throw new Error(error.message);
  }
};