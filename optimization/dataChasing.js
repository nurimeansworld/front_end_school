// 17.5.1 배열이나 객체를 불변하는 객체처럼 다루기
const aespa = ["카리나", "윈터", "지젤", "닝닝"];

// // 1. 권장되지 않는 원본 데이터를 수정하는 방법
// aespa.forEach((item, index) => {
//   aespa[index] = item + "💖";
// });
// console.log(aespa);

// 2. map을 이용해 원본 데이터를 가지고 새로운 배열로 사용하는 방법 (권장)
const aespa2 = aespa.map((item) => {
  return item + "💖";
});

console.log(aespa);
console.log(aespa2);
