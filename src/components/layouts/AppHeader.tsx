'use client';

import { useState } from 'react';
import { User } from '@/models/User';
import styles from '@/components/layouts/AppHeader.module.scss'
import LinkButton from '@/components/buttons/LinkButton';
import MenuButton from '@/components/buttons/MenuButton';
import GlobalMenu from '@/components/layouts/GlobalMenu';

type Props = {
  user: User | null;
};

export default function AppHeader({ user}: Props) {
  const [menuAppeared, setMenuAppeared] = useState(false);
  const onClickMenuButton = () => {
    setMenuAppeared(!menuAppeared);
  };
  const onCloseMenu = () => {
    setMenuAppeared(false);
  }

  return (
    <header className={styles.header}>
      {user ? (
        <p>{user.name}様</p>
      ) : (
        <LinkButton text='ログイン' href='/auth/signin' />
      )}
      <MenuButton onClick={onClickMenuButton} />
      <GlobalMenu appeared={menuAppeared} onClose={onCloseMenu} />
    </header>
  );
}