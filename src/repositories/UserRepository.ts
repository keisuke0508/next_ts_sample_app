import { prisma } from '@/lib/prisma';
import { Session } from '@/models/Session';
import { User } from '@/models/User';

export async function findSession(id: string): Promise<Session | null> {
  return prisma.session.findUnique({
    where: {
      id,
    }
  });
}

export async function createSession(userId: string, expiresAt: Date) {
  const session = await prisma.session.create({
    data: { userId, expiresAt },
  });
  return session.id;
}

export async function deleteSession(userId: string) {
  prisma.session.deleteMany({
    where: {
      userId,
    },
  });
}

export async function findUserById(id: string): Promise<User | null> {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
}

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