Array(100)
  .fill(0)
  .map((value, index) => value + index);
Array(100)
  .fill(0)
  .map((value, index, arr) => arr);

Math.pow(2, 3);
Math.pow(Math.pow(2, 3), 2);
let s = "weniv CEO lee.hojun";
s.split(" "); // weniv CEO lee.hojun
s.split(""); // w e n i v ...

"12367".split(""); // ['1' '2' '3' '6' '7']
"12367".split("").map((x) => parseInt(x)); // [1, 2, 3, 6, 7]

let sum = 0;
"12367"
  .split("")
  .map((x) => parseInt(x))
  .forEach((value) => (sum += value));
console.log(sum); // 19

let today = new Date(); //Mon Dec 06 2021 10:36:41 GMT+0900 (한국 표준시)
today.toString(); // 'Mon Dec 06 2021 10:36:41 GMT+0900 (한국 표준시)'
today.toLocaleDateString("ko-KR"); // '2021. 12. 6.'

Math.ceil(9.2); //10
Math.floor(0.8); //0
Math.round(3.3); //3
Math.round(3.6); //4
Math.max(1, 2, 3); //3
Math.min(1, 2, 3); //1

//모던자바스크립트 예제
let arr = [1, 2, 3, 4, 5];
let result = arr.reduce((sum, current) => sum + current);
console.log(result);
