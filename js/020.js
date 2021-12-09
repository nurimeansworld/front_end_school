// map
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// mdn 예제
let array = [1, 4, 9, 16];
let 곱하기2한다 = array.map((x) => x * 2);

function 제곱(num) {
  return num ** 2;
}
let 제곱한다 = array.map(제곱);
let 원래대로한다 = array.map(Math.sqrt);

// "1001001010".replace(/1/g, "#").replace(/0/g, " ");

// 이건 [array] 안에 {object}가 있는 것
let classmate = [
  { 반: 1, 번호: 1, 이름: "누리", 점수: 11 },
  { 반: 1, 번호: 2, 이름: "구리", 점수: 22 },
  { 반: 1, 번호: 3, 이름: "주리", 점수: 33 },
];
classmate.map((x) => x.번호);
classmate.map((x) => [x.번호, x.이름]);
let sum = 0;
sum = classmate
  .map((x) => x.점수)
  .forEach((y) => {
    sum += y;
  });

let data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
let newData = data.map((last) => last.map((i) => i.map((j) => j * 2)));

// filter
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// mdn 예제
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const result = words.filter((word) => word.length > 6);
console.log(result); // ['exuberant', 'destruction', 'present']

// 5보다 큰 값
let x = [2, 6, 5, 4, 8, 5, 4, 3, 2, 9];
let result = x.filter((v) => v > 5);
console.log(result);

// 회원정보로 실습해보기
let 회원정보 = [
  {
    아이디: "jjang",
    패스워드:
      "5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5",
    성별: "남",
    휴대폰번호: "010-5004-0000",
    이메일: "hojun1@gmail.com",
    가입연도: "2020-12-02",
    주접속위치: "125.242.161.149",
  },
  {
    아이디: "jjang2",
    패스워드:
      "5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5",
    성별: "남",
    휴대폰번호: "010-5004-0000",
    이메일: "hojun2@gmail.com",
    가입연도: "2021-12-02",
    주접속위치: "125.242.161.149",
  },
  {
    아이디: "jjang3",
    패스워드:
      "5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5",
    성별: "여",
    휴대폰번호: "010-5004-0000",
    이메일: "hojun3@gmail.com",
    가입연도: "2021-12-02",
    주접속위치: "125.242.161.149",
  },
  {
    아이디: "jjang4",
    패스워드:
      "5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5",
    성별: "여",
    휴대폰번호: "010-5004-0000",
    이메일: "hojun4@gmail.com",
    가입연도: "2021-12-02",
    주접속위치: "125.242.161.149",
  },
];
// 1. 성별이 남
회원정보.filter((el) => el.성별 === "남");
// 2.성별이 남이면서 2021년에 가입
회원정보.filter(
  (el) => el.성별 === "남" && el.가입연도.split("-")[0] === "2021"
);
// 3. 아이디가 jjang인 사람
회원정보.find((el) => el.아이디 === "jjang");

// filter와 find의 차이
// filter : 다 돈다. 찾아도 돈다.
// find : 찾으면 멈춘다. --> 고유한 값을 찾을 땐 효율을 위해 find 사용이 좋다!

// 또 다른 문제
// 글이 100개(25개는 일상, 50개는 개발관련 글, 25개는 취미)
let blogs = [
  {
    id: 1,
    title: "title1",
    content: "content1",
    section: "section1",
  },
  {
    id: 2,
    title: "title2",
    content: "content2",
    section: "section2",
  },
  {
    id: 3,
    title: "title3",
    content: "content3",
    section: "section3",
  },
];

let s = "section3";
let data = s ? blogs.filter((b) => b.section === s) : blogs;
