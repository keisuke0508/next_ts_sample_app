import { Prisma } from '@/generated/prisma/client';

export type Order = Prisma.OrderGetPayload<{
  id: string;
  userId: string;
  shippingAddressId: string;
  paymentId: string;
  totalQuantity: number;
  amountPrice: number;
  createdAt: boolean;
  isRefunded: boolean;

  include: {
    orderProducts: {
      include: {
        product: true;
      },
    };
    shippingAddress: {
      include: {
        prefecture: true;
      },
    };
    payment: true;
  };
}>;
