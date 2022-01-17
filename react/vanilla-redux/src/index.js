const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const number = document.querySelector('#number');
const quantity = document.querySelector('#quantity');
const totalPrice = document.querySelector('#total');

const PRICE = 17500;

let count = 0;

// UI Update - text
const updateResult = (c) => {
  number.innerText = count;
  quantity.innerHTML = c;
  totalPrice.innerHTML = c * PRICE;
};

// State Change
const addNumber = () => {
  count += 1;
  minus.disabled = false;
  updateResult(count);
};

// State Change
const substractNumber = () => {
  count -= 1;
  plus.disabled = false;
  updateResult(count);
};

// Init
number.innerHTML = count;
updateResult(count);

// Event
plus.addEventListener("click", addNumber);
minus.addEventListener("click", substractNumber);