import { prisma } from '@/lib/prisma';
import { CartProduct } from '@/models/CartProduct';

type FetchCartProduct = {
  userId: string;
}

type CreateCartProductProps = {
  productId: string;
  userId: string;
  count: number;
  price: number;
}

type UpdateCartProductProps = {
  id: string;
  count?: number;
}

type DeleteCartProductProps = {
  id: string;
}

export async function fetchCartProducts({ userId }: FetchCartProduct): Promise<CartProduct[]> {
  return await prisma.cartProduct.findMany({
    where: {
      userId,
    },
    include: {
      product: true,
    },
  })
}

export async function createCartProduct({ userId, productId, count, price }: CreateCartProductProps): Promise<void> {
  await prisma.cartProduct.create({
    data: { userId, productId, count, price },
  });
}

export async function updateCartProduct({ id, count }: UpdateCartProductProps): Promise<void> {
  await prisma.cartProduct.update({
    where: {
      id,
    },
    data: {
      ...(count != null ? { count } : {}),
    },
  })
}

export async function deleteCartProduct({ id }: DeleteCartProductProps): Promise<void> {
  await prisma.cartProduct.delete({
    where: { id },
  });
}
