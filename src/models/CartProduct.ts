import { Prisma } from '@/generated/prisma/client';

export type CartProduct = Prisma.CartProductGetPayload<{
  id: string;
  userId: string;
  productId: string;
  quantity: number;
  price: number;
  createdAt: Date;

  include: {
    product: true;
  };
}>