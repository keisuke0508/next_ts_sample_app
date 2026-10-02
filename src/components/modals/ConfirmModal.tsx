'use client';

import styles from '@/components/modals/ConfirmModal.module.scss';
import AppButton, { AppButtonColorType } from '@/components/buttons/AppButton';
import { confirmModalSubject } from '@/lib/confirmModal';
import { useState } from 'react';

export default function ConfirmModal() {
  const [message, setMessage] = useState('');
  const [okText, setOkText] = useState('');
  const [cancelText, setCancelText] = useState('');
  const [onClick, setOnClick] = useState<(() => Promise<void>) | undefined>(undefined);

  confirmModalSubject.subscribe(confirmModal => {
    setMessage(confirmModal.message);
    setOkText(confirmModal.okText);
    setCancelText(confirmModal.cancelText);
    setOnClick(() => confirmModal.onClick);
  });

  const ok = async () => {
    if (onClick) {
      await onClick();
    }
    cancel();
  }

  const cancel = () => {
    setMessage('');
    setOkText('');
    setCancelText('');
    setOnClick(undefined);
  };

  return (
    <div className={`${styles.root} ${message && styles.appeared}`}>
      <div className={styles.overlay} />
      <div className={styles.modal}>
        <div className={styles.head} />
        <p className={styles.message}>{message}</p>
        <div className={styles.buttons}>
          <AppButton text={cancelText} colorType={AppButtonColorType.Gray} onClick={cancel} />
          <AppButton text={okText} colorType={AppButtonColorType.Orange} onClick={ok} />
        </div>
      </div>
    </div>
  );
}