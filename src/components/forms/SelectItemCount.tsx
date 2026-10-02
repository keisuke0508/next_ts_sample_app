'use client';

import styles from '@/components/forms/SelectItemCount.module.scss'

type Props = {
  value?: number;
  onChange: (count: number) => void;
}

export default function SelectItemCount({ value, onChange }: Props) {
  const items = Array.from({ length: 10 }, (_, i) => i + 1);
  const selectCount = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const count = Number(e.target.value);
    onChange(count);
  }

  return (
    <select className={styles.select} defaultValue={value ?? 1} onChange={e => selectCount(e)}>
      {items.map(i => (
        <option key={i} value={i}>{i}</option>
      ))}
    </select>
  );
}