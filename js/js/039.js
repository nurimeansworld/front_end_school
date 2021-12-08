// 1. callback
const 버튼 = document.querySelector(".button");
버튼.addEventListener("click", function () {});
// 버튼.addEventListener('click', '다른 곳에서 짠 함수이름');
// 버튼.addEventListener('click', ()=>{});

// 아래가 되는 이유는
// // let hojun = console.log;
// // hojun("hello world");
// 요게 되어서

function 함수하나(출력) {
  console.log("hello"); // console.log("hello");
  출력("world"); // console.log("world");
}

함수하나(console.log); // 출력 = console.log

// 2. promise
// 모던자바스크립트 예제 (살짝 수정)
let promise = new Promise(function (resolve, reject) {
  // 프라미스가 만들어지면 executor 함수는 자동으로 실행됩니다.

  // 1초 뒤에 일이 성공적으로 끝났다는 신호가 전달되면서 result는 'done'이 됩니다.
  setTimeout(() => resolve("이제야 끝남!"), 10000);
});
console.log("hello world");
console.log(promise);

// 기본 형태
new Promise((resolve, reject) => {
  `...code...`;
})
  .then(`...code...`)
  .then(`...code...`)
  .finally(`...code...`)
  .catch(`...code...`); // <-- .catch에서 에러 객체를 다룰 수 있음

// 모던자바스크립트 예제 - then, then, then
new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000); // (*)
})
  .then(function (result) {
    // (**)

    alert(result); // 1
    return result * 2;
  })
  .then(function (result) {
    // (***)

    alert(result); // 2
    return result * 2;
  })
  .then(function (result) {
    alert(result); // 4
    return result * 2;
  });

// 모던자바스크립트 예제 (살짝 수정) - then, catch, then
// 모던자바스크립트 예제 (살짝 수정)
new Promise(function (resolve, reject) {
  setTimeout(() => reject("error"), 1000);
})
  .then(function (result) {
    alert(result + " : 잘 수행!");
    return result + "one";
  })
  .catch(function (result) {
    alert(result + " : 애러 발생!"); // 1
    return result + "two";
  })
  .then(function (result) {
    alert(result + " : 잘 수행!"); // 2
    return result + "three";
  });

// 모던자바스크립트 예제
// 다음 예제는 프라미스 체이닝이 아님!
let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise.then(function (result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function (result) {
  alert(result); // 1
  return result * 2;
});

promise.then(function (result) {
  alert(result); // 1
  return result * 2;
});

// promise는 비동기! 약속!
// catch는 오류를 잡아내는 녀석
// finally는 무조건 실행하는 녀석

// 콜백지옥 벗어나기
// 정리 전
loadScript("1.js", function (error, script) {
  if (error) {
    handleError(error);
  } else {
    // ...
    loadScript("2.js", function (error, script) {
      if (error) {
        handleError(error);
      } else {
        // ...
        loadScript("3.js", function (error, script) {
          if (error) {
            handleError(error);
          } else {
            // 모든 스크립트가 로딩된 후, 실행 흐름이 이어집니다. (*)
          }
        });
      }
    });
  }
});

// 정리 후
loadScript("/article/promise-chaining/one.js")
  .then((script) => loadScript("/article/promise-chaining/two.js"))
  .then((script) => loadScript("/article/promise-chaining/three.js"))
  .then((script) => {
    // 스크립트를 정상적으로 불러왔기 때문에 스크립트 내의 함수를 호출할 수 있습니다.
    one();
    two();
    three();
  });
