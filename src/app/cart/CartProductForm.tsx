'use client';

import { useRouter } from 'next/navigation';
import styles from '@/app/cart/CartProductForm.module.scss';
import { cartDeleteCartProduct, cartUpdateCartProduct } from '@/actions/cart';
import AppButton, { AppButtonColorType } from '@/components/buttons/AppButton';
import SelectItemQuantity from '@/components/forms/SelectItemQuantity';

type Props = {
  id: string;
  quantity: number;
}

export default function CartProductForm({ id, quantity }: Props) {
  const router = useRouter();
  const updateCartProductQuantity = async (newQuantity: number) => {
    try {
      const { message } = await cartUpdateCartProduct(id, newQuantity);
      $toast.success(message);
    } catch (e) {
      if (e instanceof Error) {
        $toast.error(e.message);
      }
    }
  };
  const deleteCartProduct = async () => {
    try {
      const { message } = await cartDeleteCartProduct(id);
      router.refresh();
      $toast.success(message);
    } catch (e) {
      if (e instanceof Error) {
        $toast.error(e.message);
      }
    }
  };

  return (
    <div className={styles.root}>
      <SelectItemQuantity value={quantity} onChange={updateCartProductQuantity} />
      <AppButton text='削除' colorType={AppButtonColorType.Red} onClick={deleteCartProduct} />
    </div>
  );
}