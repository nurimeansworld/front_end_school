// this
// this란 함수를 호출한 객체
function aboutThis() {
  console.log(this);
}
aboutThis(); // Window.이것저것등등..

//2.
let myObject = {
  val1: 100,
  func1: function () {
    console.log(this);
  },
};
myObject.func1(); //{val1:100, func1: f...}

//5. closure : 폐쇠된 공간(예를 들어 함수 스코프)의 데이터에 접근하기 위한 테크닉
function myFunc() {
  var val1 = "hello";

  return {
    getVal1: function () {
      return val1;
    },
  };
}
let result = myFunc();
result.getVal1; // 'hello'
