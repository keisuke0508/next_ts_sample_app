'use client';

import '@/extensions/Number';
import styles from '@/app/user/payments/NewPayment.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { PaymentType } from '@/types';
import AppButton, { AppButtonColorType } from '@/components/buttons/AppButton';
import AppModal from '@/components/modals/AppModal';
import SelectForm from '@/components/forms/SelectForm';
import { userCreatePayment } from '@/actions/user';

export default function NewPayment() {
  const router = useRouter();
  const [appeared, setAppeared] = useState(false);
  const showModal = () => {
    setAppeared(true);
  };
  const hideModal = () => {
    setAppeared(false);
  }

  const paymentTypeItems = Object.values(PaymentType).filter(paymentType => typeof paymentType === 'number').map(paymentType => {
    return { key: paymentType, text: paymentType.paymentTypeForJapanese() };
  });

  const [paymentType, setPaymentType] = useState(0);
  const [errorMessageForPaymentType, setErrorMessageForPaymentType] = useState('');

  const createPayment = async () => {
    setErrorMessageForPaymentType('');

    if (!paymentType) {
      setErrorMessageForPaymentType('お支払い方法を選択してください。')
      return;
    }

    try {
      const { message } = await userCreatePayment(paymentType);
      setPaymentType(0);
      $toast.success(message);
      router.refresh();
      hideModal();
    } catch (e) {
      if (e instanceof Error) {
        $toast.error(e.message);
      }
    }
  }

  return (
    <div>
      <div className={styles.buttonWrap}>
        <AppButton text='お支払い方法の追加' colorType={AppButtonColorType.Blue} onClick={showModal} />
      </div>
      {appeared && (
        <AppModal title='お支払い方法の追加'>
          <SelectForm title='お支払い方法' items={paymentTypeItems} errorMessage={errorMessageForPaymentType} onChange={setPaymentType} />
          <div className={styles.buttons}>
            <AppButton text='閉じる' colorType={AppButtonColorType.Gray} onClick={hideModal} />
            <AppButton text='保存' colorType={AppButtonColorType.Blue} onClick={createPayment} />
          </div>
        </AppModal>
      )}
    </div>
  );
}