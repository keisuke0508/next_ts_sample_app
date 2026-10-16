import { prisma } from '@/lib/prisma';

type CreateOrderParams = {
  userId: string;
  shippingAddressId: string;
  paymentId: string;
  totalQuantity: number;
  amountPrice: number;
};

export async function createOrder({ userId, shippingAddressId, paymentId, totalQuantity, amountPrice }: CreateOrderParams): Promise<string> {
  const { id } = await prisma.order.create({
    data: {
      userId, shippingAddressId, paymentId, totalQuantity, amountPrice,
    },
  });
  return id;
}
