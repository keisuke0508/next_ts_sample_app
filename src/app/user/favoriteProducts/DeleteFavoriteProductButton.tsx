'use client';

import { useRouter } from 'next/navigation';
import { userDeleteFavoriteProduct } from '@/actions/user';
import FavoriteButton from '@/components/buttons/FavoriteButton';

type Props = {
  favoriteProductId: string;
};

export default function DeleteFavoriteProductButton({ favoriteProductId }: Props) {
  const router = useRouter();

  const deleteFavoriteProduct = async () => {
    try {
      const { message } = await userDeleteFavoriteProduct(favoriteProductId);
      $toast.success(message);
      router.refresh();
    } catch (e) {
      if (e instanceof Error) {
        $toast.error(e.message);
      }
    }
  };

  return (
    <FavoriteButton isFavorite={true} onClick={deleteFavoriteProduct} />
  );
}