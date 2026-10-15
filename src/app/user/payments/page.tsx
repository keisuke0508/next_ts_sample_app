import styles from '@/app/user/payments/page.module.scss';
import { userFetchPayments } from '@/actions/user';
import PageTitle from '@/components/texts/PageTitle';
import PaymentItem from '@/app/user/payments/PaymentItem';
import NewPayment from '@/app/user/payments/NewPayment';

export default async function PaymentPage() {
  const { payments } = await userFetchPayments();

  return (
    <div>
      <PageTitle title='お支払い方法' />
      <ul className={styles.list}>
        {payments.map(payment => (
          <li key={payment.id}>
            <PaymentItem payment={payment}></PaymentItem>
          </li>
        ))}
      </ul>
      <NewPayment />
    </div>
  );
}
