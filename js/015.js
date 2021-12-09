// 1. 단순 함수 호출 연습
function fun1() {
  let x = 10;
  console.log("함수 하나!");
}
function fun2() {
  let y = 10;
  console.log("함수 둘!");
}
fun1();
fun2();

// -----------------------
// 2. 외부 변수 block scope
let k = 10;
function viewK() {
  console.log(k);
}
function addK() {
  k += 10;
  console.log(`addK : ${k}`);
}
function changeK() {
  k = 100;
  console.log(`changeK : ${k}`);
}
viewK();
addK();
changeK();
viewK();

// -----------------------
// 3. Parameter(매개변수), Argument(값)
function add(a, b) {
  // a,b 는 parameter
  return a + b;
}
add(3, 4); // 3, 4 는 argument

// -----------------------
// 4. 기본 값 설정 함수
function add(a = 100, b = 200) {
  if (a == 100) {
    return;
  }
  return a + b;
}

add(10, 20); // 30
add(10); // 210
add(); // 300
add((b = 300)); // 500 (왜냐하면 a에 300으로 들어가서 300+200)
add(undefined, 300); // (아무것도 X) undefined로 해서 그냥 return으로 나옴

// 함수를 설정하는 대표적인 2가지 방법
// 1. 함수 선언식
function hello() {
  console.log("hello");
}
// 혹은 2. 함수 표현식
let hello = function () {
  console.log("hello");
};
hello();

// key
let a = 100;
let b = 100;
let c = {
  a: 100,
  b: 200,
};
let d = { a, b };
console.log(c);
console.log(d);
