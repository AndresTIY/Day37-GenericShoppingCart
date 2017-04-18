//item array
//total in state
//add/remove item actions
//adds total

const initialState = {
  items: [],
  totalCost: null
}
export default function AppReducer (state, action) {
  if (state === undefined) {
    return initialState;


    switch(action.type){
      // case: "ADD_ITEM":
      // case: "REMOVE_ITEM":
      // case: "TOTAL_COST":


    }//end of switch
  }//end of if
  return state;
}//end of reducer
