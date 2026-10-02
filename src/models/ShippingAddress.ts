export type ShippingAddress = {
  id: string,
  userId: string,
  postalCode: string,
  prefectureId: number,
  city: string,
  address: string,
  buildingName: string | null,
  name: string,
  isDeleted: boolean,
  createdAt: Date,
};
