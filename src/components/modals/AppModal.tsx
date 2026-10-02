import styles from '@/components/modals/AppModal.module.scss';
import { ReactNode } from 'react';

type Props = {
  title?: string;
  buttonText?: string;
  children?: ReactNode;
  onClick?: () => void;
  onClose?: () => void;
};

export default function AppModal({ title, buttonText, children, onClick }: Props) {
  return (
    <div className={styles.root}>
      <div className={styles.overlay} />
      <div className={styles.modal}>
        <div className={styles.title}>{title}</div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}