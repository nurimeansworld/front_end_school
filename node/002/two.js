let 이름 = '누리';
let 나이 = 10;
function 한살더먹음() {
  나이 += 1;
}
function 값가져와() {
  return 나이;
}

// module.exports.이름 = 이름;
exports.이름 = 이름; // module 생략 가능
module.exports.나이 = 나이;
module.exports.한살더먹음 = 한살더먹음;
module.exports.값가져와 = 값가져와;
