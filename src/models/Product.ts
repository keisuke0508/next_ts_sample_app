export type Product = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  type1: number;
  type2: number | null;
  price: number;
  isDeleted: boolean;
  createdAt: Date;
}
