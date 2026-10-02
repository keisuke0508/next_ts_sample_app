import styles from '@/app/user/favoriteProducts/FavoriteProductItem.module.scss';
import Image from 'next/image';
import { FavoriteProduct } from '@/models/FavoriteProduct';
import LinkButton from '@/components/buttons/LinkButton';
import DeleteFavoriteProductButton from '@/app/user/favoriteProducts/DeleteFavoriteProductButton';

type Props = {
  favoriteProduct: FavoriteProduct;
}

export default function FavoriteProductItem({ favoriteProduct }: Props) {
  return (
    <div className={styles.root}>
      <Image src={favoriteProduct.product.imageUrl} alt={favoriteProduct.product.name} width={140} height={140} className={styles.image} />
      <div className={styles.product}>
        <h2 className={styles.productName}>{favoriteProduct.product.name}</h2>
        <p className={styles.price}>{favoriteProduct.product.price.formatPrice()}</p>
      </div>
      <div className={styles.formWrap}>
        <LinkButton text='商品ページへ' href={`/products/${favoriteProduct.productId}`} />
        <DeleteFavoriteProductButton favoriteProductId={favoriteProduct.id} />
      </div>
    </div>
  );
}