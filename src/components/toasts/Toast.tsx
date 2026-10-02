'use client';

import { useEffect, useState, useRef } from 'react';
import styles from '@/components/toasts/Toast.module.scss';
import { toastSubject } from '@/lib/toast';

export default function Toast() {
  const [type, setType] = useState<'success' | 'error' | null>();
  const [message, setMessage] = useState('');
  const [willHide, setWillHide] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    const subscription = toastSubject.subscribe(toast => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
        setType(null);
        setMessage('');
      }

      setTimeout(() => {
        setType(toast.type);
        setMessage(toast.message);
      }, 100)

      timerRef.current = setTimeout(() => {
        setWillHide(true);
        timerRef.current = setTimeout(() => {
          setType(null);
          setMessage('');
          setWillHide(false);
        }, 200);
      }, 3000);
      
    });

    return () => {
      subscription.unsubscribe();
    }
  }, []);

  return (
    <div className={`${styles.root} ${message ? styles.appeared : ''} ${willHide ? styles.willHide : ''}`}>
      <div className={`${styles.head} ${type ? styles[type] : ''}`} />
      <p className={styles.message}>{message}</p>
    </div>
  );
}