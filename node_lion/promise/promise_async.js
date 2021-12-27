// 2. then을 더 효율적으로 사용하기 위한 async, await  사용법

function sayHello() {
  console.log('sayHello 실행');

  return new Promise((resolve, reject) => {
    const text = 'Promise 실행, 성공!';
    resolve(text); // Promise가 실행 성공하면 resolve, 싪패하면 reject

    reject(new Error());
  });
}

async function test() {
  const await_text = await sayHello();
  console.log(`async, await 사용 : ${await_text}`);
}
test();
