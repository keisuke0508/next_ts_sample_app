import styles from '@/app/cart/CartProductItem.module.scss';
import Image from 'next/image';
import { CartProduct } from '@/models/CartProduct';
import LinkButton from '@/app/components/buttons/LinkButton';
import CartProductForm from '@/app/cart/CartProductForm';

type Props = {
  cartProduct: CartProduct;
}

export default function CartProductItem({ cartProduct }: Props) {
  return (
    <div className={styles.root}>
      <Image src={cartProduct.product.imageUrl} alt={cartProduct.product.name} width={140} height={140} className={styles.image} />
      <div className={styles.product}>
        <h2 className={styles.productName}>{cartProduct.product.name}</h2>
        <p className={styles.price}>{cartProduct.price.formatPrice()}</p>
      </div>
      <div className={styles.formWrap}>
        <LinkButton text='商品ページへ' href={`/products/${cartProduct.productId}`} />
        <CartProductForm id={cartProduct.id} count={cartProduct.count} />
      </div>
    </div>
  );
}