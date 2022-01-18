import { createStore } from "redux";

export const addNumber = () => {
  console.log('addNumber');
  return {type: 'ADD'};
};
export const subNumber = () => {
  console.log('subNumber');
  return {type: 'SUB'}; 
};

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

const store = createStore(reducer);

export default store;