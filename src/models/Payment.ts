import { PaymentType } from '@/types';

export type Payment = {
  id: string;
  userId: string;
  paymentType: PaymentType;
  isDeleted: boolean;
  createdAt: Date;
};
