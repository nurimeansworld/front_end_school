// 1. import redux
import { createStore } from 'redux';

const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const number = document.querySelector('#number');
const quantity = document.querySelector('#quantity');
const totalPrice = document.querySelector('#total');

const PRICE = 17500;

// CHECK:: keywords : reducer, dispatch, subscribe

// 4. dispatch : 기존의 addNumber, substractNumber를 state를 넘기는 형식으로 수정
const addNumber = () => {
  store.dispatch({ type: 'ADD' });
};
const substractNumber = () => {
  store.dispatch({ type: 'SUB' });
};

// 2. countReducer 추가
const countReducer = (state = 0, action) => {
  switch (action.type) {
    case 'ADD':
      return state += 1;
    case 'SUB':
      return state -= 1;
    default:
      return state;
  }

}
// 3. store 추가
const store = createStore(countReducer);

// 5. subscribe : UI Update - updateResult
const handleWrite = () => {
  number.innerText = store.getState();
  quantity.innerText = store.getState();
  totalPrice.innerText = store.getState() * PRICE;

  minus.disabled = (number.innerText > 0) ? false : true;
}
store.subscribe(handleWrite);

// Event
plus.addEventListener("click", addNumber);
minus.addEventListener("click", substractNumber);