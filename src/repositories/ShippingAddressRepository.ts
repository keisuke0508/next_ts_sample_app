import { prisma } from '@/lib/prisma';
import { ShippingAddress } from '@/models';

type FetchShippingAddressesParams = {
  userId: string;
};

type FetchSelectedShippingAddressParams = {
  userId: string;
};

type CreateShippingAddressParams = {
  userId: string;
  postalCode: string;
  prefectureId: number;
  city: string;
  address: string;
  buildingName?: string;
  name: string;
};

type UpdateShippingAddressParams = {
  id: string;
  postalCode: string;
  prefectureId: number;
  city: string;
  address: string;
  buildingName?: string;
  name: string;
};

type SelectShippingAddressParams = {
  id: string;
  userId: string;
};

type DeleteShippingAddressParams = {
  id: string;
};

export async function fetchShippingAddresses({ userId }: FetchShippingAddressesParams): Promise<ShippingAddress[]> {
  return await prisma.shippingAddress.findMany({
    where: {
      userId,
      isDeleted: false,
    },
    orderBy: {
      isSelected: 'desc',
    },
  });
}

export async function fetchSelectedShippingAddress({ userId }: FetchSelectedShippingAddressParams): Promise<ShippingAddress | null> {
  return await prisma.shippingAddress.findFirst({
    where: {
      userId,
      isDeleted: false,
      isSelected: true,
    },
  });
}

export async function createShippingAddress({ userId, postalCode, prefectureId, city, address, buildingName, name }: CreateShippingAddressParams): Promise<void> {
  await prisma.shippingAddress.create({
    data: {
      userId, postalCode, prefectureId, city, address, buildingName: buildingName, name,
    },
  });
}

export async function updateShippingAddress({ id, postalCode, prefectureId, city, address, buildingName, name }: UpdateShippingAddressParams): Promise<void> {
  await prisma.shippingAddress.update({
    where: {
      id,
    },
    data: {
      postalCode, prefectureId, city, address, buildingName, name,
    },
  });
}

export async function selectShippingAddress({ id, userId }: SelectShippingAddressParams): Promise<void> {
  await prisma.shippingAddress.updateMany({
    where: {
      userId,
    },
    data: {
      isSelected: false,
    },
  });

  await prisma.shippingAddress.update({
    where: {
      id,
    },
    data: {
      isSelected: true,
    },
  });
}

export async function deleteShippingAddress({ id }: DeleteShippingAddressParams): Promise<void> {
  await prisma.shippingAddress.update({
    where: {
      id,
    },
    data: {
      isDeleted: true,
    },
  });
}
