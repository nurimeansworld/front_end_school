// 날짜
// 실시간 아니고 new Date() 했을 때에 시간
let d = new Date();
console.log(d);

// 월은 0부터 시작합니다. ex. 0 : 1월
console.log(`getMonth : ${d.getMonth()}`);
console.log(`getDate : ${d.getDate()}`);
// 일은 일요일 0부터 시작합니다. ex. 3 : 수요일
console.log(`getDay : ${d.getDay()}`);
console.log(`getHours : ${d.getHours()}`);
console.log(`getMinutes : ${d.getMinutes()}`);
console.log(`getSeconds : ${d.getSeconds()}`);
console.log(`getMinutes : ${d.getMinutes()}`);

// --------------------------
// 배열 선언
let 과일 = ["사과", "수박", "복숭아", "딸기", "바나나"];
let 과일2 = new Array(5);
let 과일3 = new Array("사과", "수박", "복숭아", "딸기", "바나나");

// 배열은 이렇게 바꿀 수 있지만
console.log(`과일 : ${과일}`);
과일[0] = "한라봉";
console.log(`과일 : ${과일}`);

// 문자열은 이렇게 못바꿈
과일텍스트 = "abcde";
console.log(`과일텍스트 : ${과일텍스트}`);
과일텍스트[0] = "x";
console.log(`과일텍스트 : ${과일텍스트}`);
과일텍스트.replace("a", "x");
console.log(`과일텍스트 : ${과일텍스트}`);

// ---------------------
// 배열 for문으로만 각 값 *2하기
let sample = [1, 2, 3];
for (let i in sample) {
  sample[i] *= 2; // sample[i] = sample[i] * 2
}
console.log(sample);

// ---------------------
// 다같이 문제 풀기 https://paullabworkspace.notion.site/2-d87fa240308b441698449acc67fa2e8a
let 전교점수 = [
  // 1반
  [
    [10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60],
  ],
  // 2반
  [
    [10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60],
  ],
];
// 1. 1반의 평균
let sum = 0;
let avrLength = 0;
let avr = 0;

for (let i = 0; i < 전교점수[0].length; i++) {
  전교점수[0][i].forEach((element) => {
    sum += element;
    avrLength++;
  });
}
avr = sum / avrLength;
console.log(`sum : ${sum}`);
console.log(`avr : ${avr}`);

// -----------------------
// push, pop 외 배열 함수
let 과일 = ["사과", "수박", "복숭아", "딸기", "바나나"];
console.log(`과일 : ${과일}`);
과일.push("한라봉");
console.log(`과일 : ${과일}`);
과일.shift();
console.log(`과일 : ${과일}`);
과일.unshift("천혜향");
console.log(`과일 : ${과일}`);

과일.slice(2);
console.log(`과일 : ${과일}`);

과일.toString();
console.log(`과일 : ${과일}`);
과일.join("&");
console.log(`과일 : ${과일}`);

// concat()
let 과일 = ["복숭아", "딸기", "바나나"];
let 제주과일 = ["귤", "한라봉", "천혜향"];
과일제주과일 = 과일.concat(제주과일);

console.log(`과일제주과일 : ${과일제주과일}`);
console.log(`과일 : ${과일}`);
console.log(`제주과일 : ${제주과일}`);

// sort()
let data = [10, 20, 30, 11, 33, 433];
console.log(`data : ${data}`);
console.log(`data.sort() : ${data.sort()}`);
console.log(`data.reverse() : ${data.reverse()}`);

// asc, desc
data.sort((a, b) => a - b); // 오름차순
data.sort((a, b) => b - a); // 내림차순

// 2. 변수 : 객체 Object
let person = {
  name: "누리",
  age: 100,
  height: 200,
  job: { 첫직장: "첫직장값!", 두직장: "두직장값!" },
};
console.log(`person.name : ${person.name}`);
console.log(`person.job.첫직장 : ${person.job.첫직장}`);
console.log(`person['job'].첫직장 : ${person["job"].첫직장}`);
console.log(`Object.keys(person) : ${Object.keys(person)}`);
console.log(`Object.values(person) : ${Object.values(person)}`);

// .entries() : key, value를 짝지어서 저장
let pairPerson = Object.entries(person);
console.log(`pairPerson : ${pairPerson}`);
console.log(`pairPerson[0] : ${pairPerson[0]}`);

for (let [[i, j], k] of [
  [[1, 2], 2],
  [[1, 2], 4],
]) {
  console.log(i, j, k);
  // 1 2 2
  // 1 2 4
  console.log(i, j);
  // 1 2
  // 1 2
}

// value: '누리',
// writable: true, // 변경 가능 여부, 기본값 false
// enumerable: true, // 열거(for) 가능 여부, 기본값 false
// configurable: true // 재정의 가능 여부, 기본값 false
console.log(Object.getOwnPropertyDescriptor(person, "name"));
