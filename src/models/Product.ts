import { PokemonType } from '@/generated/prisma/client';

export type Product = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  type1: PokemonType;
  type2: PokemonType | null;
  price: number;
  isDeleted: boolean;
  createdAt: Date;
}
