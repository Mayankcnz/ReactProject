import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
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
    verticalAlign: 'top',
    paddingTop: 30,
    justifyContent: 'center',
    elevation: 8,
    border: '2px solid black',
  },

  card: {
    width: 350,
    height: '100%',
  },

  media: {
    height: '80%',
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
    background: 'red',
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
        {props.isSale && <div className={classes.saleBadge}>Sale</div>}
        <Card className={classes.card}>
          <CardMedia
            className={classes.media}
            image={require(`../assets/imgs/${props.productImage}`)}
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
