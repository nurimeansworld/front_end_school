// 재귀함수 와 캐싱
// factorial
function factorial(num) {
  if (n <= 1) return num;
  return num * factorial(num - 1);
}
// sigma
function sigma(n) {
  if (n <= 1) return n;
  return n + sigma(n);
}
// reverse
function reverse(txt) {
  txt += "";
  // let result = "";
  // console.log(result);
  // console.log(txt.length);

  if (txt.length <= 1) return txt;
  return reverse(txt.slice(1)) + txt[0];
}
// fibonacci
function fb(n) {
  if (n <= 1) return n;
  return fb(n - 1) + fb(n - 2);
}

// fibonacci - cache 설정하여
// 호출되는 것이 메모리를 차지하고 있으므로 아래 기법을 적절히 믹싱해서 사용할 필요가 있음
// 반복문, 다이나믹 프로그래밍(메모이제이션(하향식), 타뷸레이션(상향식))
let fibo_cache = [];
function fibo(n) {
  if (n in fibo_cache) return fibo_cache[n];
  fibo_cache[n] = n <= 1 ? n : fibo(n - 1) + fibo(n - 2);
  console.log(n);
  console.log(fibo_cache[n]);

  return fibo_cache[n];
}

// comma
function comma(txt) {
  // console.log(txt);
  if (txt.length <= 1) return txt;
  return txt.slice(0, 3) + "," + comma(txt.slice(3));
}
