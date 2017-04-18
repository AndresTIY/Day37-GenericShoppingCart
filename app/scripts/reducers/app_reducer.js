//item array
//total in state
//add/remove item actions
//adds total

export default function AppReducer(state, action) {
  if (state === undefined) {
    return {
      items: [],
      totalCost: null
    };
  }

  switch (action.type) {
    case "ADD_ITEM":
      var newItem = state.items.slice();

      newItem.push(action.item);

      return Object.assign({}, state, {
        items: newItem
      });
    // case: "REMOVE_ITEM":
    // case: "TOTAL_COST":


    default:
      console.debug("Unhandled State");
  } //end of switch
  return state;
} //end of reducer
