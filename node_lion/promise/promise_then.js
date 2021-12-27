// 1. promise 기본 사용법

function sayHello() {
  console.log('sayHello 실행');

  return new Promise((resolve, reject) => {
    const text = 'Promise 실행, 성공!';
    resolve(text); // Promise가 실행 성공하면 resolve, 싪패하면 reject

    reject(new Error());
  });
}

// then을 이용해 Promise를 실행시키고 resoledData로 성공한 경우 데이터를 받아옴
// catch를 이용해 Promise 실행 후 error에 대해 처리
sayHello()
  .then((resolvedData) => {
    console.log(`then 첫 번째 실행 : ${resolvedData}`);
    return resolvedData + ' returned'; // return 설정을 하면 다음 then에서 받을 수 있다.ㄴ
  })
  .then((resolvedData) => {
    console.log(`then 두 번째 실행 : ${resolvedData}`);
  })
  .catch((error) => console.log(error));
