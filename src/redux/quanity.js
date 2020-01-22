import React from 'react'
import { connect } from 'react-redux'

export default function Quanity(cartItems) {

    return (
       cartItems.reduce((acc, item) => {
           const filteredItem = acc.filter(item2 => item2.id === item.id)[0]
        //    go over the items and count the quanity
        filteredItem !== undefined ? filteredItem.quanity++ : acc.push({...item, quanity: 1})
        return acc
       }, [])
    )
}

// if the item exit add one, i++