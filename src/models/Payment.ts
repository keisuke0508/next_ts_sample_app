import { PaymentType } from '@/types';

export type Payment = {
  id: string;
  userId: string;
  paymentType: PaymentType;
  isSelected: boolean;
  isDeleted: boolean;
  createdAt: Date;
};
