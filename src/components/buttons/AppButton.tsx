'use client';

import { ButtonHTMLAttributes } from 'react';
import styles from '@/components/buttons/AppButton.module.scss'

export enum AppButtonColorType {
  White = 'white',
  Gray = 'gray',
  Blue = 'blue',
  Red = 'red',
  Orange = 'orange',
}

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