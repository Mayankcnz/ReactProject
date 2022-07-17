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

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    maxWidth: 345,
  },

  media: {
    height: 250,
    margin: 30,
    border: '3px solid black',
  },

  media2: {
    padding: '20px',
  },

  fiCardContent: {
    color: '#ffffff',
    backgroundColor: 'rgba(0,0,0,.24)',
  },
  fiCardContentTextSecondary: {
    color: 'rgba(255,255,255,0.78)',
  },
  cardContent: {
    textAlign: 'center',
  },
});

export const Product = (props: Readonly<ProductProps>) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea></CardActionArea>
      <CardMedia
        className={classes.media}
        image={require(`../assets/imgs/${props.productImage}`)}
        title="Product"
      />
      <CardContent className={classes.cardContent}></CardContent>
      <Typography gutterBottom variant="h6" component="h2">
        {props.productName + '  '} ${props.price}
      </Typography>
    </Card>
  );
};
