'use client';

import { useRouter } from 'next/navigation';
import styles from '@/components/layouts/GlobalMenu.module.scss'

type Props = {
  appeared: boolean;
  onClose: () => void;
};

const menuLinkItems = [
  { key: 1, text: 'TOP', href: '/' },
  { key: 2, text: '商品一覧', href: '/products' },
  { key: 3, text: 'カート', href: '/cart' },
  { key: 4, text: 'お気に入り商品', href: '/user/favoriteProducts' },
  { key: 5, text: 'お届け先', href: '/user/shippingAddresses' },
];

export default function GlobalMenu({ appeared, onClose }: Props) {
  const router = useRouter();
  const onClickMenu = (href: string) => {
    router.push(href);
    onClose();
  }
  return (
    <nav className={styles.root}>
      <div className={`${styles.overlay} ${appeared ? styles.appeared : ''}`} onClick={onClose} />
      <ul className={`${styles.menu} ${appeared ? styles.appeared : ''}`}>
        {menuLinkItems.map(item => (
          <li key={item.key} className={styles.listItem} onClick={() => onClickMenu(item.href)}>
            {item.text}
          </li>
        ))}
      </ul>
    </nav>
  );
}