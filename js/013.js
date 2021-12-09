// 1. 연습문제 1
// 1.1 평균
// 1.2 표준편차 (|각 값 - 평균|^2 의 합 **0.5 )

let array1 = [10, 20, 30, 10, 20, 30, 40, 10];
let 합 = 0;
let 평균 = 0;
let 분산 = 0;
let 표준편차 = 0;

for (let index = 0; index < array1.length; index++) {
  합 += array1[index];
}
평균 = 합 / array1.length;
console.log(`평균 : ${평균}`);

for (let index = 0; index < array1.length; index++) {
  array1[index] = Math.abs(array1[index] - 평균) ** 2;
  합 += array1[index];
}
분산 = 합 / array1.length - 1;
표준편차 = 분산 ** 0.5;
console.log(`분산 : ${분산}`);
console.log(`표준 편자 : ${표준편차}`);

// ----------------------------------------
// 2. 연습문제 2
// 다음 string의 평균 값

// hint code : '5, 4, 10, 2, 5'.split(',')
let array2 = "5, 4, 10, 2, 5";

// ----------------------------------------
// 3. 연습문제 3
// 콤마 찍기 1
const n = 12345.6789;
const comma = n.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

document.writeln(comma);

// 콤마 찍기 2
navigator.language;
const n = 12345.6789;
n.toLocaleString("ko-KR");

// 콤마 찍기 3
let n = 12345678;
n += "";
reverse = "";

// 문자열 뒤집기
for (let i = 0; i < n.length; i++) {
  reverse = n[i] + reverse;
}
console.log(reverse);

let sample = "";
count = 0;
for (let i = 0; i < reverse.length; ++i) {
  if (count < 2) {
    sample += reverse[i];
    ++count;
  } else {
    sample += reverse[i];
    sample += ",";
    count = 0;
  }
}
console.log(sample);
