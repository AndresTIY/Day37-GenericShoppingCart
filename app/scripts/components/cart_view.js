//dispatches Actions
//passes info to cart items
//populating child, getting data from server, cartItems is child
import React from 'react'
import CartItems from './cart_items_view.js'
import api from '../api.js'
//gets server data



class Cart extends React.Component {


  render () {
    return (
      <section>
        <Shopping />
        <CartItems />
      </section>

    );
  }
}

export default Cart
//////////////////////////////////////////////////////////////////
class Shopping extends React.Component {
  constructor(props){
    super(props)

    this.addItem = this.addItem.bind(this)
    this.removeItem = this.removeItem.bind(this)

  }

  addItem(){
    console.log('add button clicks')
  }
  removeItem(){
    console.log('remove button clicks')
  }

  render () {
    return (
      <div className="shop-view">
        {api.url.map((item, i)=>{
          return (
          <div className="item-display" key={i}>
            <p>{item.item}</p>
            <p>${item.price}</p>
            <button onClick={this.addItem}>Add</button>
            <button onClick={this.removeItem}>Remove</button>
          </div>
        )
        })}
      </div>
    )
  }
}

// <CartItems
//     item = item
//     price = item
// />
