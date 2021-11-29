// 3. Javascript의 연산
// 3.1 논리 연산자
let result = 0;

for (let x = 0; x < 101; x++) {
    // console.log(x);
    if (x % 3 == 0 || x % 5 == 0){
      // if (x % 3 == 0 && x % 5 == 0){
        // console.log(x);
        result += x
    }
}
console.log(result);

// ----------------------------
console.log(false || true);
console.log(true && false);
console.log(!true);
console.log(!((true && false) || (true && false)));
let x = 10
console.log(!((x % 5 == 0 && x % 2 == 0) || (x / 2 == 5 && false)));
let y = 10
console.log((false && y % 2 == 0) && (y / 2 == 5 && false));
let z = 3
console.log((true && z % 3 == 0) || (z / 2 !== 5 && false));// !==는 잘못된 문법입니다.ㅎㅎ

// 드모르간 법칙
console.lgo(!(x || y) === (!x && !y));
console.lgo(!(x && y) === (!x || !y));

// 3항연산자 대체 용법
console.lgo(true && '완료' || '미완료');

// ----------------------------
// 4. 조건문과 반복문
// 구구단
for(let i = 2; i < 10; i++){
    for(let j = 1; j < 10; j++){
        console.log(`${i} X ${j} = ${i*j}`)
    }
}