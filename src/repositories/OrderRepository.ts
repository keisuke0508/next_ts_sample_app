import { prisma } from '@/lib/prisma';
import { Order } from '@/models';

type FetchOrdersParams = {
  userId: string;
};

type CreateOrderParams = {
  userId: string;
  shippingAddressId: string;
  paymentId: string;
  totalQuantity: number;
  amountPrice: number;
};

export async function fetchOrders({ userId }: FetchOrdersParams): Promise<Order[]> {
  return await prisma.order.findMany({
    where: {
      userId,
    },
    include: {
      orderProducts: {
        include: {
          product: true,
        }
      },
      shippingAddress: true,
      payment: true,
    },
  });
}

export async function createOrder({ userId, shippingAddressId, paymentId, totalQuantity, amountPrice }: CreateOrderParams): Promise<string> {
  const { id } = await prisma.order.create({
    data: {
      userId, shippingAddressId, paymentId, totalQuantity, amountPrice,
    },
  });
  return id;
}
