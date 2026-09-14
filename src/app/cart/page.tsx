import { cartFetchCartProducts } from '@/actions/cart';
import styles from '@/app/cart/page.module.scss';
import PageTitle from '@/app/components/texts/PageTitle';
import CartProductItem from '@/app/cart/CartProductItem';

export default async function cartPage() {
  const { cartProducts } = await cartFetchCartProducts();

  return (
    <div>
      <PageTitle title="カート" />
      <ul className={styles.list}>
        {cartProducts.map(cartProduct => (
          <li key={cartProduct.id} className={styles.listItem}>
            <CartProductItem cartProduct={cartProduct} />
          </li>
        ))}
      </ul>
    </div>
  )
}