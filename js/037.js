// https://ko.javascript.info/destructuring-assignment
// 구조 분해 할당

// 이름과 성을 요소로 가진 배열
let arr = ["Hojun", "Lee"];

// 구조 분해 할당을 이용해
// firstName엔 arr[0]을
// surname엔 arr[1]을 할당하였습니다.
let [firstName, surname] = arr;

alert(firstName);
alert(surname);

// 이름과 성을 요소로 가진 배열
let arr = [1000, ["Hojun", "Lee"]];

// 구조 분해 할당을 이용해
// firstName엔 arr[0]을
// surname엔 arr[1]을 할당하였습니다.
let [계좌잔고, [firstName, surname]] = arr;

console.log(계좌잔고);
console.log(firstName);
console.log(surname);

let a = [
  [1, 2],
  [3, 4],
  [5, 6],
];

for (let [i, j] of a) {
  console.log(i, j);
}
