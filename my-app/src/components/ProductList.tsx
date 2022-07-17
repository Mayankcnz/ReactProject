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

const ProductList = ({ filterBy, searchBy }: ProductListI) => {
  const classes = useStyles();
  const { products, status } = useProductsHook();

  // if a filter is selected then filter by type then search text
  const filteredList =
    products &&
    products
      .filter((product) => product.type === filterBy || filterBy === 'All')
      .filter((product) =>
        product.productName.match(new RegExp(searchBy, 'i')),
      );

  return (
    <div className={classes.conatiner}>
      <Grid container justifyContent="flex-start">
        {status === 'success' &&
          filteredList &&
          filteredList.map((product, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Product
                key={i}
                productName={product.productName}
                price={product.price}
                productImage={product.productImage}
                isSale={product.isSale}
              />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default ProductList;
