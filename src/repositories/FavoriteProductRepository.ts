import { prisma } from '@/lib/prisma';
import { FavoriteProduct } from '@/models/FavoriteProduct';

type FetchFavoriteProductProps = {
  userId: string;
};

type ExistsFavoriteProductProps = {
  userId: string;
  productId: string;
};

type CreateFavoriteProductProps = {
  userId: string;
  productId: string;
};

type DeleteFavoriteProductProps = {
  id: string;
};

export async function fetchFavoriteProducts({ userId }: FetchFavoriteProductProps): Promise<FavoriteProduct[]> {
  return await prisma.favoriteProduct.findMany({
    where: {
      userId,
    },
    include: {
      product: true,
    },
  });
}

export async function fetchFavoriteProduct({ userId, productId }: ExistsFavoriteProductProps): Promise<FavoriteProduct | null> {
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

export async function createFavoriteProduct({ userId, productId }: CreateFavoriteProductProps): Promise<void> {
  await prisma.favoriteProduct.create({
    data: {
      userId, productId,
    },
  });
}

export async function deleteFavoriteProduct({ id }: DeleteFavoriteProductProps): Promise<void> {
  await prisma.favoriteProduct.delete({
    where: {
      id,
    },
  });
}
