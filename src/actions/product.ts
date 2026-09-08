'use server';

import { findProducts, countProducts } from '@/repositories/ProductRepository';
import { ProductsResponse } from '@/responses/ProductsResponse';

export type FetchProductsParams = {
  page: number;
  count: number;
}

export async function fetchProducts({ page, count }: FetchProductsParams): Promise<ProductsResponse> {
  const products = await findProducts({ page, count });
  const countAll = await countProducts();
  const pageAll = Math.ceil(countAll / count);
  const pager = { page, count, countAll, pageAll };
  return { products, pager };
}
