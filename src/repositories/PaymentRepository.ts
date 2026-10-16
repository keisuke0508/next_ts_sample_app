import { prisma } from '@/lib/prisma';
import { Payment } from '@/models';
import { PaymentType } from '@/types';

type FetchPaymentParams = {
  userId: string;
};

type FetchSelectedPaymentParams = {
  userId: string;
};


type CreatePaymentParams = {
  userId: string;
  paymentType: PaymentType;
};

type SelectPaymentParams = {
  id: string;
  userId: string;
};

type DeletePaymentParams = {
  id: string;
};

export async function fetchPayments({ userId }: FetchPaymentParams): Promise<Payment[]> {
  const payments = await prisma.payment.findMany({
    where: {
      userId,
      isDeleted: false,
    },
    orderBy: {
      isSelected: 'desc',
    },
  });
  return payments.map(payment => {
    return {
      ...payment,
      paymentType: payment.paymentType as PaymentType,
    };
  });
}

export async function fetchSelectedPayment({ userId }: FetchSelectedPaymentParams): Promise<Payment | null> {
  const payment = await prisma.payment.findFirst({
    where: {
      userId,
      isDeleted: false,
      isSelected: true,
    },
  });

  if (payment == null) return null;

  return Object.assign(payment, { paymentType: payment.paymentType as PaymentType });
}

export async function createPayment({ userId, paymentType }: CreatePaymentParams): Promise<void> {
  await prisma.payment.create({
    data: {
      userId, paymentType
    },
  });
}

export async function selectPayment({ id, userId }: SelectPaymentParams): Promise<void> {
  await prisma.payment.updateMany({
    where: {
      userId,
    },
    data: {
      isSelected: false,
    },
  });

  await prisma.payment.update({
    where: {
      id,
    },
    data: {
      isSelected: true,
    },
  });
}

export async function deletePaymemt({ id }: DeletePaymentParams): Promise<void> {
  await prisma.payment.update({
    where: {
      id
    },
    data: {
      isDeleted: true,
    },
  });
}
