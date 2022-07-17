import { Product } from './Product';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { ProductData, ProductListI } from '../interfaces/Product';
import { useQuery } from 'react-query';
import axios from 'axios';

const useStyles = makeStyles({
  conatiner: {
    display: 'flex',
  },
});

const GET_PRODUCTS = async (): Promise<ProductData[]> => {
  try {
    const { data, status } = await axios.get<{ products: ProductData[] }>(
      'http://localhost:3001/productsData.json',
    );
    if (status !== 200) throw new Error('Netword response was not ok');
    return data.products;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

const ProductList = () => {
  const { data: products, status } = useQuery<ProductData[]>(
    'products',
    GET_PRODUCTS,
  );

  console.log('products', products);

  const classes = useStyles();
  return (
    <div className={classes.conatiner}>
      <Grid container justifyContent="flex-start">
        {status === 'success' &&
          products &&
          products.map((product, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Product
                key={i}
                productName={product.productName}
                price={product.price}
                productImage={product.productImage}
              />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default ProductList;
