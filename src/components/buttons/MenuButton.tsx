import styles from '@/components/buttons/MenuButton.module.scss'

type Props = {
  onClick: () => void;
}

export default function MenuButton({ onClick }: Props) {
  return (
    <button className={styles.button} onClick={onClick}>
      <img src='/menu.svg' alt='メニュー' />
    </button>
  );
}
