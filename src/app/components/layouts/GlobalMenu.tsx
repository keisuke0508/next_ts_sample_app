'use client';

import { useRouter } from 'next/navigation';
import styles from '@/app/components/layouts/GlobalMenu.module.scss'

type Props = {
  appeared: boolean;
  onClose: () => void;
};

const menuLinkItems = [
  { key: 1, text: 'TOP', href: '/' },
  { key: 2, text: '商品一覧', href: '/products' }
];

export default function GlobalMenu({ appeared, onClose }: Props) {
  const router = useRouter();
  const onClickMenu = (href: string) => {
    router.push(href);
    onClose();
  }
  return (
    <div className={`${styles.root} ${appeared ? styles.appeared : ''}`}>
      <div className={`${styles.menu} ${appeared ? styles.appeared : ''}`}>
        <ul>
          {menuLinkItems.map(item => (
            <li key={item.key} className={styles.listItem} onClick={() => onClickMenu(item.href)}>
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}