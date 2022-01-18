// 3. 최신 모듈 문법에 맞춰 수정
export function plus(a, b) {
  return a+b;
}

// const myObj = {};

// // 2. 이렇게 즉시 실행 함수 안에 함수를 선언해서(지역변수처럼) 생성해둔 객체에 넣는 방식으로 사용
// (
//   function () {
//     function plus(a, b) {
//       return a+b;
//     }
//     myObj.plus = plus;
//   }
// )()

// // 1. 전역변수가 오염된 상황
// // console에서도 직접 접근 가능