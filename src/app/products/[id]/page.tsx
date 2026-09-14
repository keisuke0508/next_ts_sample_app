import Image from 'next/image';
import styles from '@/app/products/[id]/page.module.scss';
import { productFetchProduct } from '@/actions/product';
import PageTitle from '@/app/components/texts/PageTitle';
import ProductForm from '@/app/products/[id]/ProductForm';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const { product } = await productFetchProduct(id);

  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Image src={product.imageUrl} alt={product.name} width={300} height={300} className={styles.image} />
        <div>
          <PageTitle title={product.name} />
          <p className={styles.description}>{product.description}</p>
          <p className={styles.types}>タイプ: {product.type1.pokemonTypeForJapanese()}{product.type2 ? ` / ${product.type2.pokemonTypeForJapanese()}` : ''}</p>
          <p className={styles.price}>{product.price.formatPrice()}</p>
          <ProductForm productId={product.id} price={product.price} />
        </div>
      </div>
    </div>
  );
};