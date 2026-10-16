'use client';

import styles from '@/app/products/[id]/ProductForm.module.scss';
import { useState } from 'react';
import SelectItemQuantity from '@/components/forms/SelectItemQuantity';
import AppButton, { AppButtonColorType } from '@/components/buttons/AppButton';
import { cartCreateCartProduct } from '@/actions/cart';

type Props = {
  productId: string;
  price: number;
}

export default function ProductForm({ productId, price }: Props) {
  const [quantity, setQuantity] = useState(1);
  const addToCart = async () => {
    try {
      const { message } = await cartCreateCartProduct(productId, quantity, price);
      $toast.success(message);
    } catch (e) {
      if (e instanceof Error) {
        $toast.error(e.message);
      }
    }
  }

  return (
    <div className={styles.root}>
      <SelectItemQuantity onChange={setQuantity} />
      <AppButton text='カートに追加する' colorType={AppButtonColorType.Blue} onClick={addToCart} />
    </div>
  );
}