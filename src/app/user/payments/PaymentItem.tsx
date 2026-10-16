import styles from '@/app/user/payments/PaymentItem.module.scss';
import { Payment } from '@/models';
import PaymentButtons from '@/app/user/payments/PaymentButtons';

type Props = {
  payment: Payment;
  hideUI?: boolean;
};

export default function PaymentItem({ payment, hideUI = false }: Props) {
  return (
    <div className={`${styles.root} ${payment.isSelected ? styles.selected : ''}`}>
      <p className={styles.paymentType}>{ payment.paymentType.paymentTypeForJapanese() }</p>
      <PaymentButtons id={payment.id} hideUI={hideUI} /> 
    </div>
  );
}