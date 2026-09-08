import { Product } from '@/models/Product';
import { Pager } from '@/models/Pager';

export type ProductsResponse = {
  products: Product[],
  pager: Pager,
}
