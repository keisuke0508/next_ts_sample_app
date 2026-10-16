'use client';

import styles from '@/app/order/complete/page.module.scss';
import PageTitle from '@/components/texts/PageTitle';
import ToTopButton from '@/app/order/complete/ToTopButton';

export default function OrderCompletePage() {
  return (
    <div>
      <PageTitle title='ご注文完了' />
      <p className={styles.paragrah}>
        ご注文が完了しました。<br />
        商品のお届けまで楽しみにお待ちください。
      </p>
      <div className={styles.buttonWrap}>
        <ToTopButton />
      </div>
    </div>
  );
}
