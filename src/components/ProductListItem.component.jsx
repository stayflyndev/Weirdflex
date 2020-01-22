import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';

import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
       card: {
        minWidth: 275,
        backgroundColor: 'beige',
        padding: '20px',
        margin: '20px'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const ProductListItem = (props) => {
    const classes = useStyles();

    const thisItemInCart = props.cart.filter(item => item.id === props.products.id)[0]
    
    console.log(props)
    console.log(props.products.name)
    
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <div>
  <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          {props.products.name}
          <Typography gutterBottom variant="h5" component="h2">
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
        {props.products.description}
         </Typography>
         Starting at ${props.products.price}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() =>props.addToCart(props.products)} props={props.cart} >
         Order Now ({ (thisItemInCart && thisItemInCart.quanity) || 0 })
        </Button>
       
      </CardActions>
    </Card>


        
        </div>
    );
}

export default ProductListItem;
