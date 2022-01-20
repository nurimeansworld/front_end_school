import { createStore } from "redux";

// 2. Action create function
export const addNumber = () => {
  console.log('addNumber');
  return {
    // 1. Action
    type: 'ADD'};
};
export const subNumber = () => {
  console.log('subNumber');
  return {type: 'SUB'}; 
};

// 4. Reducer
const reducer = (state = 0, action) => {
  console.log('reducer 들어옴!');
  switch (action.type) {
    case 'ADD':
      return state++;
    case 'SUB':
      return state--;
    default:
      return state;
  }
};

// 3. Store
const store = createStore(reducer);

export default store;