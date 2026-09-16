'use client';

import { useRouter } from 'next/navigation';
import styles from '@/app/cart/CartProductForm.module.scss';
import { cartDeleteCartProduct, cartUpdateCartProduct } from '@/actions/cart';
import { AppButtonColorType } from '@/types/AppButtonColorType';
import AppButton from '@/app/components/buttons/AppButton';
import SelectItemCount from '@/app/components/forms/SelectItemCount';
import { toast } from '@/lib/toast';

type Props = {
  id: string;
  count: number;
}

export default function CartProductForm({ id, count }: Props) {
  const router = useRouter();
  const updateCartProductCount = async (newCount: number) => {
    try {
      const { message } = await cartUpdateCartProduct(id, newCount);
      toast.success(message);
    } catch (e) {
      if (e instanceof Error) {
        alert(e.message);
      }
    }
  };
  const deleteCartProduct = async () => {
    try {
      const { message } = await cartDeleteCartProduct(id);
      router.refresh();
      toast.success(message);
    } catch (e) {
      if (e instanceof Error) {
        alert(e.message);
      }
    }
  };

  return (
    <div className={styles.root}>
      <SelectItemCount value={count} onChange={updateCartProductCount} />
      <AppButton text='削除' colorType={AppButtonColorType.Red} onClick={deleteCartProduct} />
    </div>
  );
}