import { Product } from './Product';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { ProductListI } from '../interfaces/Product';
import useProductsHook from '../services/useProductsHook';

const useStyles = makeStyles({
  conatiner: {
    display: 'flex',
  },
});

const ProductList = ({ filterBy }: ProductListI) => {
  const classes = useStyles();
  const { products, status } = useProductsHook();

  return (
    <div className={classes.conatiner}>
      <Grid container justifyContent="flex-start">
        {status === 'success' &&
          products &&
          products.map(
            (product, i) =>
              (filterBy === product.type || filterBy === 'All') && (
                <Grid item xs={12} sm={6} md={4} lg={3}>
                  <Product
                    key={i}
                    productName={product.productName}
                    price={product.price}
                    productImage={product.productImage}
                  />
                </Grid>
              ),
          )}
      </Grid>
    </div>
  );
};

export default ProductList;
