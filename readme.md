## Shopping Cart Component
#### Explorer Mode
Use React/Redux to Create a Shopping Cart App
- Make a _Cart_ and _CartItem_ Component
- _Cart_ should be a container component
  - Connect to the Redux store
  - Be responsible for dispatching action to fetching data from the server
  - Pass all necessary data down to it's children -> _CartItem_'s
- Reducer
  - At a minimum have an items array and a total in the state
  - Handle a custom action through which one could add a new item to it
  - Handle a custom action through which one could remove an items
  - Have a custom function that calculates the total based on the item current in the Cart
- App should display
  - Items in the cart in a _tabular_ format
  - Current Correct total cost
- App should allow users to add/remove items from cart's inventory
- Idea is to create a generic shopping cart that can be re-used on any application
- Need to generate a list of items available for sale. Hard Coded first and then moved to backendless

#### Plan and Checklist

[X] Component: Cart Item
- [X] Display: Items in tabular format
- [X] Display: Total Cost

[X] Component: Shopping View
- [X] Display Items for Sale
- [X] Add Cart Item Button
- [X] Remove Cart Item Button

////////////////////////////////////////////////////////////////
[ ] Component: Cart
- [X] Container Component
- [ ] Responsible for Dispatching Actions
- [X] Responsible for Fetching data from server
- [X] Create Fake Server Data, api.js
- [ ] Passes info to it's children in CartItem

////////////////////////////////////////////////////////////////


[ ] Reducer
- [ ] Items Array
what should this look like?
items = [{ball: 5}, {cheetos: 100}, {paper: 2}]
only way to pair items with price that I can think of
- [ ] Total in State
- [ ] Add Item Action
- [ ] Remove Item Action
- [ ] Add Total based on Cart Inventory
- Global State: Items Being Purchased, Total Cost

////////////////////////////////////////////////////////////////




#### Current Challenges and Questions
- Styling Table Data, <tbody> vs <table>
- Dispatch not defined. What needs to be connected?
