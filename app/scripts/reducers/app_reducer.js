//item array
//total in state
//add/remove item actions
//adds total

export default function AppReducer (state, action) {
  if (state === undefined) {
    return {
      items: [],
      totalCost: null
    };


    switch(action.type){
      // case: "ADD_ITEM":
      // case: "REMOVE_ITEM":
      // case: "TOTAL_COST":


    }//end of switch
  }//end of if
  return state;
}//end of reducer
