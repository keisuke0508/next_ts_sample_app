import { Prisma } from '@/generated/prisma/client';

export type CartProduct = Prisma.CartProductGetPayload<{
  id: string;
  userId: string;
  productId: string;
  count: number;
  price: number;
  createdAt: Date;

  include: {
    product: true;
  };
}>