import { prisma } from '@/lib/prisma';
import { ShippingAddress } from '@/models/ShippingAddress';

type FindShippingAddressesParams = {
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

type DeleteShippingAddressParams = {
  id: string;
};

export async function findShippingAddresses({ userId }: FindShippingAddressesParams): Promise<ShippingAddress[]> {
  return await prisma.shippingAddress.findMany({
    where: {
      userId,
      isDeleted: false,
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

export async function deleteShippingAddress({ id }: DeleteShippingAddressParams): Promise<void> {
  await prisma.shippingAddress.delete({
    where: {
      id,
    },
  });
}
