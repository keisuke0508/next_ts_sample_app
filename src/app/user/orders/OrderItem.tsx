import styles from '@/app/user/orders/OrderItem.module.scss';
import Image from 'next/image';
import { Order } from '@/models';

type Props = {
  order: Order;  
};

export default function OrderItem({ order }: Props) {
  const orderProducts = order.orderProducts.slice(0, 3);

  return (
    <div className={styles.root}>
      <div>
        <div className={styles.content}>
          <h6 className={styles.contentTitle}>ご注文日時</h6>
          <p className={styles.contentText}>{order.createdAt.formatDatetimeString()}</p>
        </div>
        <div className={styles.content}>
          <h6 className={styles.contentTitle}>ご注文商品</h6>
          <ul className={styles.orderProducts}>
            {orderProducts.map(orderProduct => (
              <li key={orderProduct.id}>
                <Image src={orderProduct.product.imageUrl} alt={orderProduct.product.name} width={80} height={80} className={styles.image} />
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.content}>
          <h6 className={styles.contentTitle}>お届け先</h6>
          <p className={styles.contentText}>{order.shippingAddress.postalCode}</p>
          <p className={styles.contentText}>{order.shippingAddress.city}{order.shippingAddress.address}{order.shippingAddress.buildingName}</p>
          <p className={styles.contentText}>{order.shippingAddress.name}</p>
        </div>
        <div className={`${styles.content} ${styles.last}`}>
          <h6 className={styles.contentTitle}>お支払い方法</h6>
          <p className={styles.contentText}>{order.payment.paymentType.paymentTypeForJapanese()}</p>
        </div>
      </div>
      <div className={styles.rightContents}>
        <div className={styles.content}>
          <h6 className={styles.contentTitle}>商品数</h6>
          <p className={styles.contentText}>{order.totalQuantity}</p>
        </div>
        <div className={`${styles.content} ${styles.last}`}>
          <h6 className={styles.contentTitle}>合計金額</h6>
          <p className={`${styles.contentText} ${styles.amountPrice}`}>{order.amountPrice.formatPrice()}</p>
        </div>
      </div>
    </div>
  );
}