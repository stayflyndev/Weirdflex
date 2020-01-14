import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

const ProductListItem = ({product}) => {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (

        <div>

            <Card className={classes.card}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5" component="h2">
                    This item starts at a low price of $ {product.price}
                      
                    </Typography>
                   
                    <Typography variant="body2" component="p">
                        
                        {product.description}
                        <br />
                        {'"fresh food!"'}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Buy Now</Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default ProductListItem;
