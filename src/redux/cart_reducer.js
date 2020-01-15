import React from 'react';

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
