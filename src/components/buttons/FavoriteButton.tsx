'use client';

import styles from '@/components/buttons/FavoriteButton.module.scss';

type Props = {
  isFavorite: boolean;
  onClick: () => void;
};

export default function FavoriteButton({ isFavorite, onClick }: Props) {
  return (
    <button className={styles.button} onClick={onClick}>
      {isFavorite &&
        <img src='/heartActive.svg' alt='お気に入り' />
      }
      {!isFavorite &&
        <img src='/heart.svg' alt='お気に入り' />
      }
    </button>
  );
}