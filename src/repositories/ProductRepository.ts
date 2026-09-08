import { prisma } from '@/lib/prisma';
import { Product } from '@/models/Product';

type FindProductsParams = {
  page: number;
  count: number;
} 

export async function findProducts({ page, count }: FindProductsParams): Promise<Product[]> {
  return prisma.product.findMany({
    where: {
      isDeleted: false,
    },
    orderBy: {
      id: 'asc',
    },
    skip: (page - 1) * count,
    take: count,
  });
}

export async function countProducts(): Promise<number> {
  return prisma.product.count({
    where: {
      isDeleted: false,
    },
  });
}