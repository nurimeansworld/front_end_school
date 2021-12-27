// const test = () => {};  // 기본 형식

const test = () => {
  console.log('화살표 함수 테스트 완료!');
};
const test_withX = (x) => {
  console.log(x);
};
const test_noWrap = (x) => console.log(x);
const test_add = (x, y) => console.log(x + y);

test();
test_withX('테스트');
test_noWrap('한 줄이면 {} 생략 가능');
test_add(3, 4);
