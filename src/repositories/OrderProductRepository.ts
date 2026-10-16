import { prisma } from '@/lib/prisma';

type CreateOrderProductsParams = {
  orderId: string;
  products: {
    productId: string;
    quantity: number;
    price: number;
  }[];
};

export async function createOrderProducts({ orderId, products }: CreateOrderProductsParams): Promise<void> {
  const data = products.map(product => Object.assign(product, { orderId  }))
  await prisma.orderProduct.createMany({
    data,
  });
}
