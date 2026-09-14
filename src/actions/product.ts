'use server';

import { findProducts, countProducts, findProduct } from '@/repositories/ProductRepository';
import { ProductResponse } from '@/responses/ProductResponse';
import { ProductsResponse } from '@/responses/ProductsResponse';

export async function productFetchProducts(page: number, count: number): Promise<ProductsResponse> {
  const products = await findProducts({ page, count });
  const countAll = await countProducts();
  const pageAll = Math.ceil(countAll / count);
  const pager = { page, count, countAll, pageAll };
  return { products, pager };
}

export async function productFetchProduct(id: string): Promise<ProductResponse> {
  const product = await findProduct({ id });
  if (!product || product.isDeleted) throw new Error('商品が見つかりませんでした。');
  return { product };
} 