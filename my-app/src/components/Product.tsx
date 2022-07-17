import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { ProductProps } from '../interfaces/Product';
import { Paper } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  paper: {
    backgroundColor: 'red',
    height: 420,
    flex: 1,
    display: 'flex',
    // alignItems: 'flex-end',
    verticalAlign: 'top',
    paddingTop: 30,
    // align: 'center',
    justifyContent: 'center',
    elevation: 8,
    border: '2px solid black',
  },

  card: {
    width: 350,
    height: '100%',
    // backgroundColor: 'green',
    // marginBottom: 30,
  },

  media: {
    height: '80%',
    // marginBottom: 150,
    // width: '100%',
    // margin: 30,
    border: '3px solid black',
  },

  media2: {
    padding: '20px',
  },

  fiCardContent: {
    color: '#630707',
    backgroundColor: 'rgba(0,0,0,.24)',
  },
  fiCardContentTextSecondary: {
    color: '#610d0dc6',
  },
  cardContent: {
    textAlign: 'center',
  },

  name: {
    // height: 10,
    // verticalAlign: 'center',
    // align: 'center',
  },
});

export const Product = (props: Readonly<ProductProps>) => {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={require(`../assets/imgs/${props.productImage}`)}
            // title="Product"
          />
          <CardContent>
            <Typography
              className={classes.name}
              gutterBottom
              variant="h5"
              component="div"
            >
              {props.productName + '  '} {props.price}
            </Typography>
          </CardContent>
        </Card>
      </Paper>
    </>
  );
};

/**
 * <Typography
          className={classes.name}
          gutterBottom
          variant="h5"
          component="div"
        >
          {props.productName + '  '} {props.price}
        </Typography>
 */
