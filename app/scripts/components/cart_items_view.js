//display items in tabular format
//display total cost
import React from "react";
import allState from "../containers/all.js";
import { connect } from "react-redux";
import container from "../containers/all.js";

class CartItems extends React.Component {
  render() {
    return (
      <tbody>
        {this.props.cart.map((item, i) => {
          return (
            <tr key={i}>
              <td>{item.singleItem}</td>
              <td>{item.singlePrice}</td>
            </tr>
          );
        })}
        <tr>
          <th>Total</th>
          <th>{this.props.totalCost}</th>
        </tr>
      </tbody>
    );
  }
}

export default connect(container.allState)(CartItems);
