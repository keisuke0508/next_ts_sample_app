import styles from '@/app/products/page.module.scss';
import PageTitle from '@/app/components/texts/PageTitle';
import ProductItem from '@/app/products/ProductItem';
import { findProducts } from '@/repositories/ProductRepository';

export default async function ProductsPage() {
  const products = await findProducts({ page: 1, count: 251 });
  return (
    <div>
      <PageTitle title='商品一覧' />
      <ul className={styles.list}>
        {products.map(product => (
          <li key={product.id}>
            <ProductItem product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}