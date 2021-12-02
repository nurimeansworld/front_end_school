// 6. Map & Set
// Map
let m = new Map();

// Map에 값을 넣기
m.set("하나", "1");
m.set(1, "하나");
m.set(true, 1);
m.set(false, 0);
console.log(m);

// Map의 값에 접근하기
console.log(m.get("하나")); // 1
console.log(m.get(true)); // 1

// Map의 값이 있는지 확인하기
console.log(m.has("하나")); // true

// Map의 값을 제거하기
console.log(m.delete("하나")); // true
console.log(m.has("하나")); // false
console.log(m); // {1 => 하나, true => 1, false => 0}

// Map의 크기를 확인하기
console.log(m.size); // 3

// Set
let s = new Set("abcdeeeeeeeee");
console.log(s); // [a, b, c, d, e]
console.log(s.size); //5

// Set은 순서가 없다
console.log(s.delete("b")); // true
console.log(s); // Set(5) {'a', 'c', 'd', 'e', 'f'}
console.log(s.has("c")); // true

s.forEach((i) => console.log(i)); // a / c / d / e

// 예제 1 : 교집합, 합집합,
// 참고 : https://88240.tistory.com/519
let a = new Set("abc");
let b = new Set("cde");

console.log([...a].filter((value) => b.has(value))); // [c]
