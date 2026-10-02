import commonStyles from '@/components/forms/Common.module.scss';
import styles from '@/components/forms/PostalCodeForm.module.scss';
import { useEffect, useState } from 'react';

type Props = {
  title?: string;
  value?: string;
  id?: string;
  errorMessage?: string;
  onBlur?: (value: string) => void;
};

export default function PostalCodeForm({ title, value, id, errorMessage, onBlur }: Props) {
  const [valueA, setValueA] = useState('');
  const [valueB, setValueB] = useState('');

  useEffect(() => {
    if (value) {
      const [a, b] = value.split('-');
      setValueA(a);
      setValueB(b);
    }
  }, [value]);


  const onChangePostalCode = () => {
    if (onBlur) {
      const postalCode = `${valueA}-${valueB}`;
      onBlur(postalCode);
    }
  }
  return (
    <div className={commonStyles.root}>
      <label htmlFor={id}>{title ?? '郵便番号'}</label>
      <div className={styles.inputs}>
        <input
          type='text'
          className={`${styles.input} ${styles.inputA}`}
          value={valueA}
          id={id}
          onChange={(e) => setValueA(e.target.value)}
          onBlur={onChangePostalCode}
        />
        <div>ー</div>
        <input
          type='text'
          className={`${styles.input} ${styles.inputB}`}
          value={valueB}
          onChange={(e) => setValueB(e.target.value)}
          onBlur={onChangePostalCode}
        />
      </div>
      {errorMessage && <p className={commonStyles.errorMessage}>{errorMessage}</p>}
    </div>
  );
}