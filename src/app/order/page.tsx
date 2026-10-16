import styles from '@/app/order/page.module.scss';
import { cartFetchCartProducts } from '@/actions/cart';
import { userFetchPayments, userFetchShippingAddresses } from '@/actions/user';
import PageTitle from '@/components/texts/PageTitle';
import CartProductItem from '@/app/cart/CartProductItem';
import ShippingAddressItem from '@/app/user/shippingAddresses/ShippingAddressItem';
import PaymentItem from '@/app/user/payments/PaymentItem';
import OrderButton from '@/app/order/OrderButton';

export default async function OrderPage() {
  const [{ cartProducts, totalQuantity, amountPrice }, { shippingAddresses }, { payments }] = await Promise.all([
    cartFetchCartProducts(),
    userFetchShippingAddresses(),
    userFetchPayments(),
  ]);

  return (
    <div>
      <PageTitle title='ご注文確認' />
      <h3 className={styles.contentTitle}>ご注文商品</h3>
      <ul className={styles.list}>
        {cartProducts.map(cardProduct => (
          <li key={cardProduct.id}>
            <CartProductItem cartProduct={cardProduct} hideUI={true} />
          </li>
        ))}
      </ul>

      <h3 className={styles.contentTitle}>お届け先</h3>
      <ul className={styles.list}>
        {shippingAddresses.map(shippingAddress => (
          <li key={shippingAddress.id}>
            <ShippingAddressItem shippingAddress={shippingAddress} hideUI={true} />
          </li>
        ))}
      </ul>

      <h3 className={styles.contentTitle}>お支払い方法</h3>
      <ul className={styles.list}>
        {payments.map(payment => (
          <li key={payment.id}>
            <PaymentItem payment={payment} hideUI={true} />
          </li>
        ))}
      </ul>

      <div className={styles.descriptions}>
        <dl className={styles.descriptionList}>
          <dt className={styles.descriptionTitle}>商品数</dt>
          <dd className={styles.totalQuantity}>{totalQuantity}</dd>
        </dl>
        <dl className={styles.descriptionList}>
          <dt className={styles.descriptionTitle}>合計金額</dt>
          <dd className={styles.amountPrice}>{amountPrice.formatPrice()}</dd>
        </dl>
      </div>

      <div className={styles.buttonWrap}>
        <OrderButton />
      </div>
    </div>
  );
}