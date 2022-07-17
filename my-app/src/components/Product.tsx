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
    backgroundColor: '#5F9EA0 ',
    position: 'relative',
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

  saleBadge: {
    // display: 'flex',
    // justifyContent: 'center',
    background: 'red',
    // borderRadius: '0px 30px 30px 30px',
    width: 140,
    position: 'absolute',
    height: 40,
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    textAlign: 'center',
    fontSize: '20px',
  },
});

export const Product = (props: Readonly<ProductProps>) => {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper}>
        <div className={classes.saleBadge}>Sale</div>
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={require(`../assets/imgs/${props.productImage}`)}
            // title="Product"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
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
