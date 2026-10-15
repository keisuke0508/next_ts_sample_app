import { prisma } from '@/lib/prisma';
import { Prefecture } from '@/models';

export async function findPrefectures(): Promise<Prefecture[]> {
  return await prisma.prefecture.findMany({
    orderBy: {
      id: 'asc',
    },
  });
}
