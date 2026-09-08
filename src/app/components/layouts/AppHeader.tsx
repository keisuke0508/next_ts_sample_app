'use client';

import { useState } from 'react';
import styles from '@/app/components/layouts/AppHeader.module.scss'
import LinkButton from '@/app/components/buttons/LinkButton';
import MenuButton from '@/app/components/buttons/MenuButton';
import GlobalMenu from '@/app/components/layouts/GlobalMenu';

export default function AppHeader() {
  const [menuAppeared, setMenuAppeared] = useState(false);
  const onClickMenuButton = () => {
    setMenuAppeared(!menuAppeared);
  };
  const onCloseMenu = () => {
    setMenuAppeared(false);
  }

  return (
    <div className={styles.header}>
      <LinkButton text='ログイン' href='/auth/signin' />
      <MenuButton onClick={onClickMenuButton} />
      <GlobalMenu appeared={menuAppeared} onClose={onCloseMenu} />
    </div>
  );
}