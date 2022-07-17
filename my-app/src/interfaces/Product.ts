export interface ProductData {
  index: number;
  isSale: boolean;
  price: string;
  productImage: string;
  productName: string;
  type: string;
}

export type ProductProps = Pick<
  ProductData,
  'productName' | 'productImage' | 'price'
>;

export interface ProductList {
  products: ProductData[] | undefined;
}
