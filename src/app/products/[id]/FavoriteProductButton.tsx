'use client';

import { useRouter } from 'next/navigation';
import { userCreateFavoriteProduct, userDeleteFavoriteProduct } from '@/actions/user';
import styles from '@/app/products/[id]/FavoriteProductButton.module.scss';
import FavoriteButton from '@/components/buttons/FavoriteButton';

type Props = {
  productId: string;
  favoriteProductId?: string;
}

export default function FavoriteProductButton({ productId, favoriteProductId }: Props) {
  const router = useRouter();
  const isFavorite = favoriteProductId != null;

  const onClick = async () => {
    try {
      if (favoriteProductId) {
        const { message } = await userDeleteFavoriteProduct(favoriteProductId);
        $toast.success(message);
      } else {
        const { message } = await userCreateFavoriteProduct(productId);
        $toast.success(message);
      }
      router.refresh();
    } catch (e) {
      if (e instanceof Error) {
        $toast.error(e.message);
      }
    }
  };

  return (
    <div className={styles.root}>
      <FavoriteButton isFavorite={isFavorite} onClick={onClick} />
    </div>
  );
}
