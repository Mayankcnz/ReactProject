import { Product } from './Product';
import { Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { ProductList } from '../interfaces/Product';

const useStyles = makeStyles({
  conatiner: {
    display: 'flex',
  },
  paper: {
    height: 200,
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
  },
});

const ProductList = ({ products }: ProductList) => {
  const classes = useStyles();
  return (
    <div className={classes.conatiner}>
      <Grid container justifyContent="flex-start">
        {products &&
          products.map((product, i) => (
            <Grid item xs={12} sm={6} md={4} lg={3} spacing={0}>
              <Paper className={classes.paper}>
                <Product
                  key={i}
                  productName={product.productName}
                  price={product.price}
                  productImage={product.productImage}
                />
              </Paper>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default ProductList;
