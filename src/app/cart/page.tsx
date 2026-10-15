import { cartFetchCartProducts } from '@/actions/cart';
import styles from '@/app/cart/page.module.scss';
import PageTitle from '@/components/texts/PageTitle';
import CartProductItem from '@/app/cart/CartProductItem';
import ToOrderButton from './ToOrderButton';

export default async function cartPage() {
  const { cartProducts, productCount, amountPrice } = await cartFetchCartProducts();

  return (
    <div>
      <PageTitle title="カート" />
      <div className={styles.contents}>
        <ul className={styles.list}>
          {cartProducts.map(cartProduct => (
            <li key={cartProduct.id} className={styles.listItem}>
              <CartProductItem cartProduct={cartProduct} />
            </li>
          ))}
        </ul>
        <div className={styles.sideContent}>
          <div className={styles.descriptions}>
            <dl className={styles.descriptionList}>
              <dt className={styles.descriptionTitle}>商品数</dt>
              <dd className={styles.productCount}>{productCount}</dd>
            </dl>
            <dl className={styles.descriptionList}>
              <dt className={styles.descriptionTitle}>合計金額</dt>
              <dd className={styles.amountPrice}>{amountPrice.formatPrice()}</dd>
            </dl>
          </div>
          <div className={styles.buttonWrap}>
            <ToOrderButton />
          </div>
        </div>
      </div>
    </div>
  )
}