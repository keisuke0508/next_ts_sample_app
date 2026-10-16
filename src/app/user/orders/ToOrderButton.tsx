'use client';

import LinkButton from '@/components/buttons/LinkButton';

type Props = {
  id: string;
};

export default function ToOrderButton({ id }: Props) {
  return (
    <LinkButton text='ご注文詳細へ' href={`/user/orders/${id}`} />
  );
}