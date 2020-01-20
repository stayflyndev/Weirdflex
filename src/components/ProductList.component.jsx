import React from 'react';
import ProductListItem from './ProductListItem.component'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { makeStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux'

const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      flexDirection: 'row',
      backgroundColor: theme.palette.background.paper,
    },
    gridList: {
      width:'auto',
      height: 'auto',
    },
  }));

function ProductList (props){
    const classes = useStyles();
    return (
        
        <div>
           
           {
              props.products.map(product => 
               {
                  return <ProductListItem products={product} key={product.id}  addToCart={props.addToCart} />;
                }
               )
                 }
        </div> 
    );

}

// access to the store props state
function mapStateToProps(state) {
  return {
    cart: state.cart
}

}
function mapDispatchToProps (dispatch) {
  // fires your REDUX ACTIONS
  return {
    addToCart: (item) => {
      dispatch({type: 'ADD', payload: item}) //item we are dealing with
    },
    removeFromCart: (item) => {
      dispatch({ type: 'REMOVE', payload: item})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps )(ProductList);
