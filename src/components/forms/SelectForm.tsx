import commonStyles from '@/components/forms/Common.module.scss';
import styles from '@/components/forms/SelectForm.module.scss';

type Item = {
  key: number;
  text: string;
};

type Props = {
  title: string;
  items: Item[];
  value?: number;
  id?: string;
  errorMessage?: string;
  onChange?: (value: number) => void;
};

export default function SelectForm({ title, value, items, id, errorMessage, onChange }: Props) {
  const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      const value = Number(e.target.value);
      onChange(value);
    }
  }
  return (
    <div className={commonStyles.root}>
      <label htmlFor={id} className={commonStyles.label}>{title}</label>
      <select className={styles.select} id={id} defaultValue={value} onChange={onSelect}>
        <option value={0}>選択してください</option>
        {items.map(item => (
          <option key={item.key} value={item.key}>{item.text}</option>
        ))}
      </select>
      {errorMessage && <p className={commonStyles.errorMessage}>{errorMessage}</p>}
    </div>
  );
}