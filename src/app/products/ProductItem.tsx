import Link from 'next/link';
import Image from 'next/image';
import styles from '@/app/products/ProductItem.module.scss';
import { Product } from '@/models/Product'

type Props = {
  product: Product;
}

export default function ProductItem({ product }: Props) {
  const href = '/';
  return (
    <Link href={href}>
      <Image src={product.imageUrl} alt={product.name} width={200} height={200} className={styles.image} />
      <p className={styles.productName}>{product.name}</p>
      <p className={styles.price}>{product.price.formatPrice()}</p>
    </Link>
  )
}