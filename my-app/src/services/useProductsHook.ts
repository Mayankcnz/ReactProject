import { useQuery } from 'react-query';
import { ProductData } from '../interfaces/Product';
import axios from 'axios';

const GET_PRODUCTS = async (): Promise<ProductData[]> => {
  try {
    const { data, status } = await axios.get<{ products: ProductData[] }>(
      './productsData.json',
    );
    if (status !== 200) throw new Error('Netword response was not ok');
    return data.products;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
const useProductHook = () => {
  const { data: products, status } = useQuery<ProductData[]>(
    'products',
    GET_PRODUCTS,
  );

  console.log('dirname', __dirname);

  return { products: products, status: status };
};

export default useProductHook;
