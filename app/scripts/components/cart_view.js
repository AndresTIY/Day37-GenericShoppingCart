//dispatches Actions
//passes info to cart items
//populating child, getting data from server, cartItems is child
import React from "react";
import CartItems from "./cart_items_view.js";
import api from "../api.js";
import allState from "../containers/all.js";
import store from "../store.js";
import { connect } from "react-redux";
import container from "../containers/all.js";
import loadData from "../actions/load_data.js";

class Cart extends React.Component {
  render() {
    return (
      <section>
        <Shopping />
        <div className="cart-items">
          <p>Cart</p>
          <table>
            <CartItems />
          </table>
        </div>
      </section>
    );
  }
}

export default Cart;

//////////////////////////////////////////////////////////////////
class Shopping extends React.Component {
  constructor(props) {
    super(props);
  }

  addItem(item) {
    store.dispatch({
      type: "ADD_ITEM",
      item: {
        singleItem: item.item,
        singlePrice: item.price
      }
    });
  }

  removeItem(item) {
    store.dispatch({
      type: "REMOVE_ITEM",
      item: {
        singleItem: item.item,
        singlePrice: item.price
      }
    });
  }

  render() {
    return (
      <div className="shop-view">
        {api.url.map((item, i) => {
          return (
            <div className="item-display" key={i}>
              <p>{item.item}</p>
              <p>${item.price}</p>
              <button onClick={this.addItem.bind(this, item)}>Add</button>
              <button onClick={this.removeItem.bind(this, item)}>Remove</button>
            </div>
          );
        })}
      </div>
    );
  }
}
