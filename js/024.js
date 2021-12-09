// rand()
var randNumber = Math.random(); // 0이상 1미만의 숫자
Math.floor(randNumber * 10); // floor 버림

// 만약 우리가 뽑고자 하는 건 2~5까지
Math.floor(randNumber * 5); // 0~4까지의 숫자
Math.floor(randNumber * 5 + 2); // 2~6까지의 숫자
Math.floor(randNumber * (5 - 2) + 2); // 2~5까지의 숫자

function randNumFunc(min, max) {
  return Math.floor(randNumber * (max - min) + min);
}

let lottoList = new Map();
let index = 0;

function getLotto(min, max) {
  var randNumber = Math.random(); // 0이상 1미만의 숫자
  var newNumber = Math.floor(randNumber * (max - min) + min); // 숫자를 뽑고
  // 중복 확인을 하고
  if (!lottoList.has(randNumber)) {
    lottoList.set(index, newNumber);
    index++;
  }
}

// 실행
for (let index = 0; index < 6; index++) {
  getLotto(1, 46);
}

console.log(result);

// --------------------------------
// 준홍님 코드
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function tryLotto(...input) {
  if (input.length !== 6) {
    console.log("숫자를 6개 입력해야 합니다.");
    return;
  } else if (input.length !== new Set(input).size) {
    console.log("숫자를 중복되지 않게 입력해야 합니다.");
    return;
  } else if (input.some((v) => !Number.isInteger(v) || v > 45 || v < 1)) {
    console.log("1부터 45까지 숫자 중 하나를 입력해야 합니다.");
    return;
  }

  const selected = [];
  let count = 0;
  while (count < 7) {
    const selectedNum = randomNum(1, 46);
    if (!selected.includes(selectedNum)) {
      count++;
      selected.push(selectedNum);
    }
  }
  console.log(
    `당첨번호: ${selected.slice(0, 6).join(" ")} | 보너스: ${selected[6]}`
  );
  const nums = input.filter((v) => selected.slice(0, 6).includes(v));
  switch (nums.length) {
    case 0:
    case 1:
    case 2:
      console.log("꽝!");
      break;
    case 3:
      console.log("★ 5등 당첨! ★");
      break;
    case 4:
      console.log("★★ 4등 당첨! ★★");
      break;
    case 5:
      if (input.includes(selected[6])) {
        console.log("★★★★ 2등 당첨!! ★★★★");
        nums.push(`보너스 ${selected[6]}`);
      } else console.log("★★★ 3등 당첨!! ★★★");
      break;
    case 6:
      console.log("★★★★★ 1등 당첨!!! ★★★★★");
  }
  if (nums.length > 0) console.log(`내가 맞춘 번호: ${nums.join(" ")}`);
}
