// call by value, reference, sharing
// !! JS는 모두 call by value만 가능 !!
let x = [10, 20, 30];
function test1(a) {
  a[0] = 10000;
}
test1(x); // 10000

let y = 10;
function test2(a) {
  a = 2222;
  return a;
}
test2(y); // 10
