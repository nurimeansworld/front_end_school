// try catch : https://ko.javascript.info/try-catch
let json = "{ bad json }";

try {
  let user = JSON.parse(json); // <-- 여기서 에러가 발생하므로
  alert(user.name); // 이 코드는 동작하지 않습니다.
} catch (e) {
  // 에러가 발생하면 제어 흐름이 catch 문으로 넘어옵니다.
  alert("데이터에 에러가 있어 재요청을 시도합니다.");
  alert(e.name);
  alert(e.message);
}

let json = '{ "age": 30 }'; // 불완전한 데이터

try {
  let user = JSON.parse(json); // <-- 에러 없음

  if (!user.name) {
    throw new SyntaxError("불완전한 데이터: 이름 없음"); // (*)
  }

  alert(user.name);
} catch (e) {
  alert("JSON Error: " + e.message); // JSON Error: 불완전한 데이터: 이름 없음
}

// 커스텀 에러 : https://ko.javascript.info/custom-errors
// 자바스크립트 자체 내장 에러 클래스 Error의 '슈도 코드'
class Error {
  constructor(message) {
    this.message = message;
    this.name = "Error"; // (name은 내장 에러 클래스마다 다릅니다.)
    this.stack = `<call stack>`; // stack은 표준은 아니지만, 대다수 환경이 지원합니다.
  }
}
