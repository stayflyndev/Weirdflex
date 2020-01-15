import {combineReducers} from 'redux'
import cartReducer from './redux/cart_reducer'

// updates the state with actions 
const rootReducer = combineReducers({
    
cart: cartReducer
})

export default rootReducer;