import styles from '@/app/user/favoriteProducts/page.module.scss';
import PageTitle from '@/components/texts/PageTitle';
import FavoriteProductItem from '@/app/user/favoriteProducts/FavoriteProductItem';
import { userFetchFavoriteProducts } from '@/actions/user';

export default async function FavoriteProductsPage() {
  const { favoriteProducts } = await userFetchFavoriteProducts();

  return (
    <div>
      <PageTitle title='お気に入り商品' />
      {favoriteProducts.length === 0 && (
        <p className={styles.message}>お気に入り商品がありません。</p>
      )}
      <ul className={styles.list}>
        {favoriteProducts.map(favoriteProduct => (
          <li key={favoriteProduct.id}>
            <FavoriteProductItem favoriteProduct={favoriteProduct} />
          </li>
        ))}
      </ul>
    </div>
  );
}