'use client';

import { ButtonHTMLAttributes } from 'react';
import styles from '@/app/components/buttons/AppButton.module.scss'
import { AppButtonColorType } from '@/types/AppButtonColorType';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'],
  text?: string,
  colorType?: AppButtonColorType,
  onClick?: () => void,
}

export default function AppButton({
  type = 'button',
  text = 'ボタン',
  colorType = AppButtonColorType.White,
  className,
  onClick = () => {}
}: Props) {
  return (
    <button type={type} className={`${styles.button} ${styles[colorType]} ${className}`} onClick={onClick}>
      {text}
    </button>
  );
}