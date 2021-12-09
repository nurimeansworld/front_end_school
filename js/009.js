// 4.2.2 for 문의 다른 형태들
// for문
let array = [10, 20, 30, 40, 50];
let i = 0;

for (; i < array.length; ) {
  document.write(array[i], "<br>");
  i++;
}

// foreaach 문
const array1 = ["a", "b", "c"];
array1.forEach((element) => console.log(element + "!!"));

// forin 문 : 인덱스
for (var variable in array) {
  document.write(array[variable], "<br>");
}
// forof 문 : 값
let result = 0;
for (let variable of array) {
  result += variable;
}
result = result / array.length;
