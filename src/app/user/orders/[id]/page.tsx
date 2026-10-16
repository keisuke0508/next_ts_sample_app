import styles from '@/app/user/orders/[id]/page.module.scss';
import { userFetchOrder } from '@/actions/user';
import PageTitle from '@/components/texts/PageTitle';
import CartProductItem from '@/app/cart/CartProductItem';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function OrderPage({ params }: Props) {
  const { id } = await params;
  const { order } = await userFetchOrder(id);

  return (
    <div>
      <PageTitle title='ご注文詳細' />
      <div className={styles.content}>
        <h6 className={styles.contentTitle}>ご注文日時</h6>
        <p className={styles.contentText}>{order.createdAt.formatDatetimeString()}</p>
      </div>
      <div className={styles.content}>
        <h6 className={styles.contentTitle}>ご注文日時</h6>
        <p className={styles.contentText}>{order.createdAt.formatDatetimeString()}</p>
      </div>
      <div className={styles.content}>
        <h6 className={styles.contentTitle}>商品数</h6>
        <p className={styles.contentText}>{order.totalQuantity}</p>
      </div>
      <div className={styles.content}>
        <h6 className={styles.contentTitle}>合計金額</h6>
        <p className={`${styles.contentText} ${styles.amountPrice}`}>{order.amountPrice.formatPrice()}</p>
      </div>
      <div className={styles.content}>
        <h6 className={styles.contentTitle}>お届け先</h6>
        <p className={styles.contentText}>〒{order.shippingAddress.postalCode}</p>
        <p className={styles.contentText}>{order.shippingAddress.prefecture.name}{order.shippingAddress.city}{order.shippingAddress.address}{order.shippingAddress.buildingName}</p>
        <p className={styles.contentText}>{order.shippingAddress.name}</p>
      </div>
      <div className={styles.content}>
        <h6 className={styles.contentTitle}>お支払い方法</h6>
        <p className={styles.contentText}>{order.payment.paymentType.paymentTypeForJapanese()}</p>
      </div>
      <div>
        <h6 className={styles.contentTitle}>ご注文商品</h6>
        <ul className={styles.orderProducts}>
          {order.orderProducts.map(orderProduct => (
            <li key={orderProduct.id}>
              <CartProductItem cartProduct={orderProduct} hideUI={true} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}