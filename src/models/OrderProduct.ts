import { Prisma } from '@/generated/prisma/client';

export type OrderProduct = Prisma.OrderProductGetPayload<{
  id: string;
  userId: string;
  productId: string;
  quantity: number;
  price: number;
  createdAt: Date;

  include: {
    product: true;
  };
}>;
