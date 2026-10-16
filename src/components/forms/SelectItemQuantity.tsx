'use client';

import styles from '@/components/forms/SelectItemQuantity.module.scss'

type Props = {
  value?: number;
  onChange: (quantity: number) => void;
}

export default function SelectItemQuantity({ value, onChange }: Props) {
  const items = Array.from({ length: 10 }, (_, i) => i + 1);
  const selectQuantity = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const quantity = Number(e.target.value);
    onChange(quantity);
  }

  return (
    <select className={styles.select} defaultValue={value ?? 1} onChange={e => selectQuantity(e)}>
      {items.map(i => (
        <option key={i} value={i}>{i}</option>
      ))}
    </select>
  );
}