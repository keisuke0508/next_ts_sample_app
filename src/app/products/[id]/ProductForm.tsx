'use client';

import styles from '@/app/products/[id]/ProductForm.module.scss';
import { useState } from 'react';
import SelectItemCount from '@/app/components/forms/SelectItemCount';
import AppButton from '@/app/components/buttons/AppButton';
import { AppButtonColorType } from '@/types/AppButtonColorType';
import { cartCreateCartProduct } from '@/actions/cart';

type Props = {
  productId: string;
  price: number;
}

export default function ProductForm({ productId, price }: Props) {
  const [count, setCount] = useState(1);
  const addToCart = async () => {
    try {
      const { message } = await cartCreateCartProduct(productId, count, price);
      $toast.success(message);
    } catch (e) {
      if (e instanceof Error) {
        alert(e.message);
      }
    }
  }

  return (
    <div className={styles.root}>
      <SelectItemCount onChange={setCount} />
      <AppButton text='カートに追加する' colorType={AppButtonColorType.Blue} onClick={addToCart} />
    </div>
  );
}