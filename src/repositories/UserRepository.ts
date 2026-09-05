import { prisma } from '@/lib/prisma';
import { User } from '@/models/User';

export async function findUserByEmail(email: string): Promise<User | null> {
  return prisma.user.findUnique({
    where: {
      email,
    }
  });
}

export async function createUser(email: string, password: string, name: string) {
  await prisma.user.create({
    data: { email, password, name }
  });
}