
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function registerUser(data: any) {
  try {
    const hashedPassword = await bcrypt.hash(data.password, 10); 

    const user = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
      },
    });

    return user;
  } catch (error) {
    console.error("Erreur lors de l'inscription :", error);
    return null;
  }
}


// prisma.$disconnect();