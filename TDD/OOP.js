// 보다 바람직한 TDD를 위해 모듈 패턴을 이해해야한다.
// 객체지향

// 이렇게 모듈 패턴을 이용하면 anti pattern을 사용하지 않게 된다.
// 1. 모듈 패턴
function Person() {
  // 클로저 공간
  let age = 35;

  return {
    getAge: function () {
      return age;
    },
    setAge: function (data) {
      age = data;
    },
    // 얘네 둘이 클로저 공간에 접근할 수 있는 클로저 함수
  };
}

const person = Person();
console.log(person.getAge());

// 2. 사용자 정의 타입 패턴
function PersonType() {
  this.age = 35;
  // 이 값은 외부에서 은닉되지 않는다. 값을 숨길 수 없다.
}

PersonType.prototype.getAge = function () {
  return this.age;
};

const instancePerson = new PersonType();
console.log(instancePerson.getAge());
