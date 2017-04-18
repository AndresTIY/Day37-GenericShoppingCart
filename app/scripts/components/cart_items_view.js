//display items in tabular format
//display total cost
import React from 'react'

class CartItems extends React.Component {
  render () {
    return (
      <div className="cart-items">
        <p>Cart</p>
          <table>
            <tbody>
              <tr>
                <th>Item</th>
                <th>Price</th>
              </tr>
              <tr>
                <td>Wine</td>
                <td>6.99</td>
              </tr>
              <tr>
                <th>Total</th>
                <th>$25</th>
              </tr>
          </tbody>
        </table>
      </div>

    );
  }
}

export default CartItems
