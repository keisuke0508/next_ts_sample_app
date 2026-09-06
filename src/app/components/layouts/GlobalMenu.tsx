'use client';

import styles from '@/app/components/layouts/GlobalMenu.module.scss'
import Link from "next/link";

type Props = {
  appeared: boolean;
};

const menuLinkItems = [
  { key: 1, text: 'TOP', href: '/' },
];

export default function GlobalMenu({ appeared }: Props) {
  return (
    <div className={`${styles.root} ${appeared ? styles.appeared : ''}`}>
      <div className={`${styles.menu} ${appeared ? styles.appeared : ''}`}>
        <ul>
          {menuLinkItems.map(item => (
            <li key={item.key} className={styles.listItem}>
              <Link href={item.href}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}