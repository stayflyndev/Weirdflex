import React from 'react';
// magic happens, specify how the state changes
// initial state = 

const cartReducer = (state = [], action) => {
    switch(action.type) {
        case 'ADD':
            return [...state, action.payload]

        case 'REMOVE':
            const firstMatched = state.indexOf(action.payload)
        return state.filter((item, idx) => (idx !== firstMatched))
        
        default:
        return state
        
    }

}

export default cartReducer;
