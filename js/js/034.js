let user = {
  name: "John",
};

Object.defineProperty(user, "name", {
  writable: false,
});

user.name = "Pete";

let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },
};

alert(user.fullName);

let animal = {
  eats: true,
  walk() {
    alert("동물이 걷습니다.");
  },
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

// 메서드 walk는 rabbit의 프로토타입인 animal에서 상속받았습니다.
rabbit.walk(); // 동물이 걷습니다.
