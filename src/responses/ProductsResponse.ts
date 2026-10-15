import { Product, Pager } from '@/models';

export type ProductsResponse = {
  products: Product[],
  pager: Pager,
}
