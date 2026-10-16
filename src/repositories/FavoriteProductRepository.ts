import { prisma } from '@/lib/prisma';
import { FavoriteProduct } from '@/models';

type FetchFavoriteProductParams = {
  userId: string;
};

type ExistsFavoriteProductParams = {
  userId: string;
  productId: string;
};

type CreateFavoriteProductParams = {
  userId: string;
  productId: string;
};

type DeleteFavoriteProductParams = {
  id: string;
};

export async function fetchFavoriteProducts({ userId }: FetchFavoriteProductParams): Promise<FavoriteProduct[]> {
  return await prisma.favoriteProduct.findMany({
    where: {
      userId,
    },
    include: {
      product: true,
    },
  });
}

export async function fetchFavoriteProduct({ userId, productId }: ExistsFavoriteProductParams): Promise<FavoriteProduct | null> {
  return await prisma.favoriteProduct.findUnique({
    where: {
      userId_productId: {
        userId, productId,  
      },
    },
    include: {
      product: true,
    }
  });
}

export async function createFavoriteProduct({ userId, productId }: CreateFavoriteProductParams): Promise<void> {
  await prisma.favoriteProduct.create({
    data: {
      userId, productId,
    },
  });
}

export async function deleteFavoriteProduct({ id }: DeleteFavoriteProductParams): Promise<void> {
  await prisma.favoriteProduct.delete({
    where: {
      id,
    },
  });
}
