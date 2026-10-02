import { Prisma } from '@/generated/prisma/client';

export type FavoriteProduct = Prisma.FavoriteProductGetPayload<{
  id: string;
  userId: string;
  productId: string;
  createdAt: Date;

  include: {
    product: true;
  }
}>