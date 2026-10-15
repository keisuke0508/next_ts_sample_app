import { prisma } from '@/lib/prisma';
import { Payment } from '@/models';
import { PaymentType } from '@/types';

type FindPaymentParams = {
  userId: string;
};

type CreatePaymentParams = {
  userId: string;
  paymentType: PaymentType;
};

type DeletePaymentParams = {
  id: string;
};

export async function findPayments({ userId }: FindPaymentParams): Promise<Payment[]> {
  const payments = await prisma.payment.findMany({
    where: {
      userId,
      isDeleted: false,
    },
  });
  return payments.map(payment => {
    return {
      ...payment,
      paymentType: payment.paymentType as PaymentType,
    };
  });
}

export async function createPayment({ userId, paymentType }: CreatePaymentParams): Promise<void> {
  await prisma.payment.create({
    data: {
      userId, paymentType
    },
  });
}

export async function deletePaymemt({ id }: DeletePaymentParams): Promise<void> {
  await prisma.payment.delete({
    where: {
      id
    },
  });
}
