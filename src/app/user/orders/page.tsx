import { userFetchOrders } from '@/actions/user';
import styles from '@/app/user/orders/page.module.scss';
import PageTitle from '@/components/texts/PageTitle';
import OrderItem from '@/app/user/orders/OrderItem';

export default async function OrdersPage() {
  const { orders } = await userFetchOrders();

  return (
    <div>
      <PageTitle title='ご注文履歴' />
      {orders.length === 0 && (
        <p className={styles.message}>ご注文履歴がありません。</p>
      )}
      <ul className={styles.list}>
        {orders.map(order => (
          <li key={order.id}>
            <OrderItem order={order} />
          </li>
        ))}
      </ul>
    </div>
  );
}