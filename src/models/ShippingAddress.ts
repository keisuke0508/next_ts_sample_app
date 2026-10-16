export type ShippingAddress = {
  id: string;
  userId: string;
  postalCode: string;
  prefectureId: number;
  city: string;
  address: string;
  buildingName: string | null;
  name: string;
  isSelected: boolean;
  isDeleted: boolean;
  createdAt: Date;
};
