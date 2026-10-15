import styles from '@/app/user/payments/PaymentItem.module.scss';
import { Payment } from '@/models';
import DeletePaymentButton from '@/app/user/payments/DeletePaymentButton';

type Props = {
  payment: Payment
};

export default function PaymentItem({ payment }: Props) {
  return (
    <div className={styles.root}>
      <p className={styles.paymentType}>{ payment.paymentType.paymentTypeForJapanese() }</p>
      <DeletePaymentButton id={payment.id} />
    </div>
  );
}