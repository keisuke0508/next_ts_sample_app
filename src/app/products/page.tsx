import styles from '@/app/products/page.module.scss';
import PageTitle from '@/components/texts/PageTitle';
import ProductItem from '@/app/products/ProductItem';
import { productFetchProducts } from '@/actions/product';

export default async function ProductsPage() {
  const page = 1;
  const count = 251;
  const { products } = await productFetchProducts(page, count);
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