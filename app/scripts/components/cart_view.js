//container component
//dispatches Actions
//gets server data
//passes info to cart items
//populating child, getting data from server
import React from 'react'
import CartItems from './cart_items_view.js'


class Cart extends React.Component {


  render () {
    return (
        <CartItems />
    );
  }
}

export default Cart
