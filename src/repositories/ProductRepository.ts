import { prisma } from '@/lib/prisma';
import { Product } from '@/models/Product';

type FindProductsParams = {
  page: number;
  count: number;
};

type FindProductParams = {
  id: string;
};

export async function findProducts({ page, count }: FindProductsParams): Promise<Product[]> {
  return await prisma.product.findMany({
    where: {
      isDeleted: false,
    },
    orderBy: {
      id: 'asc',
    },
    skip: (page - 1) * count,
    take: count,
  });
};

export async function countProducts(): Promise<number> {
  return await prisma.product.count({
    where: {
      isDeleted: false,
    },
  });
};

export async function findProduct({ id }: FindProductParams): Promise<Product | null> {
  return await prisma.product.findFirst({
    where: {
      id,
    },
  });
};
