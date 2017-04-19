//item array
//total in state
//add/remove item actions
//adds total

export default function AppReducer(state, action) {
  if (state === undefined) {
    return {
      store: [],
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
        totalCost: Number((state.totalCost + price).toFixed(2))
      });

    case "REMOVE_ITEM":
      var itemToRemove = action.item.singleItem;
      var priceToSubtract = action.item.singlePrice;
      var newCart = state.cart.filter(item => {
        return item.singleItem !== itemToRemove;
      });
      if (state.totalCost <= 0) {
        return Object.assign({}, state, {
          cart: newCart,
          totalCost: 0
        });
      } else {
        return Object.assign({}, state, {
          cart: newCart,
          totalCost: Number((state.totalCost - priceToSubtract).toFixed(2))
        });
      }

    case "LOAD_DATA":
      return Object.assign({}, state, {
        store: action.data
      });

    default:
      console.debug("Unhandled State");
  } //end of switch
  return state;
} //end of reducer
