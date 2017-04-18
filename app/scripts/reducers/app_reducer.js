//item array
//total in state
//add/remove item actions
//adds total

export default function AppReducer(state, action) {
  if (state === undefined) {
    return {
      cart: [],
      totalCost: 0
    };
  }

  switch (action.type) {
    case "ADD_ITEM":
      var newItem = state.cart.slice();
      var price = action.item.singlePrice;
      newItem.push(action.item);
      return Object.assign({}, state, {
        cart: newItem,
        totalCost: state.totalCost + price
      });
    // case: "REMOVE_ITEM":
    // case: "TOTAL_COST":


    default:
      console.debug("Unhandled State");
  } //end of switch
  return state;
} //end of reducer
