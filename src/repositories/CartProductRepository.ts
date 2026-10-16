import { prisma } from '@/lib/prisma';
import { CartProduct } from '@/models';

type FetchCartProductParams = {
  userId: string;
};

type CreateCartProductParams = {
  productId: string;
  userId: string;
  quantity: number;
  price: number;
};

type UpdateCartProductParams = {
  id: string;
  quantity?: number;
};

type DeleteCartProductParams = {
  id: string;
};

type ResetCartProductsParams = {
  userId: string;
};

export async function fetchCartProducts({ userId }: FetchCartProductParams): Promise<CartProduct[]> {
  return await prisma.cartProduct.findMany({
    where: {
      userId,
    },
    include: {
      product: true,
    },
  })
}

export async function createCartProduct({ userId, productId, quantity, price }: CreateCartProductParams): Promise<void> {
  await prisma.cartProduct.upsert({
    where: {
      userId_productId: {
        userId, productId,
      },
    },
    create: { userId, productId, quantity, price },
    update: {
      quantity: {
        increment: quantity,
      },
      price,
    }
  });
}

export async function updateCartProduct({ id, quantity }: UpdateCartProductParams): Promise<void> {
  await prisma.cartProduct.update({
    where: {
      id,
    },
    data: {
      ...(quantity != null ? { quantity } : {}),
    },
  })
}

export async function deleteCartProduct({ id }: DeleteCartProductParams): Promise<void> {
  await prisma.cartProduct.delete({
    where: { id },
  });
}

export async function resetCartProducts({ userId }: ResetCartProductsParams) {
  await prisma.cartProduct.deleteMany({
    where: { userId },
  });
}
