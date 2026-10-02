'use client';

import { useState } from 'react';
import commonStyles from '@/components/forms/Common.module.scss';
import styles from '@/components/forms/TextForm.module.scss'

type Props = {
  title: string,
  value?: string,
  type?: string,
  id?: string,
  name?: string,
  errorMessage?: string,
  onBlur?: (value: string) => void,
}

export default function TextForm({ title, value = '', type = 'text', id, name, errorMessage, onBlur }: Props) {
  const [text, setText] = useState(value);
  return (
    <div className={commonStyles.root}>
      <label htmlFor={id} className={commonStyles.label}>{title}</label>
      <input 
        type={type}
        id={id}
        name={name}
        value={text}
        className={styles.input}
        onChange={(e) => {setText(e.target.value)}}
        onBlur={onBlur ? (e) => onBlur(e.target.value) : () => {}}
      />
      {errorMessage && <p className={commonStyles.errorMessage}>{errorMessage}</p>}
    </div>
  );
}