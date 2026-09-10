'use client';

import { useState } from 'react';
import { User } from '@/models/User';
import styles from '@/app/components/layouts/AppHeader.module.scss'
import LinkButton from '@/app/components/buttons/LinkButton';
import MenuButton from '@/app/components/buttons/MenuButton';
import GlobalMenu from '@/app/components/layouts/GlobalMenu';

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
    <div className={styles.header}>
      {user ? (
        <p>{user.name}様</p>
      ) : (
        <LinkButton text='ログイン' href='/auth/signin' />
      )}
      <MenuButton onClick={onClickMenuButton} />
      <GlobalMenu appeared={menuAppeared} onClose={onCloseMenu} />
    </div>
  );
}