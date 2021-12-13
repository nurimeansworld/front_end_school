// 보다 바람직한 TDD를 위해 모듈 패턴을 이해해야한다.
// 객체지향

// 이렇게 모듈 패턴을 이용하면 anti pattern을 사용하지 않게 된다.
// 1. 모듈 패턴
// 이유 : 값을 은닉하기 위해서 클로저를 사용해 모듈 패턴을 만든다!
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

// 2. 사용자 정의 타입 패턴(생성자 정의 패턴)
function PersonType() {
  this.age = 35;
  // 이 값은 외부에서 은닉되지 않는다. 값을 숨길 수 없다.
}

PersonType.prototype.getAge = function () {
  return this.age;
};

const instancePerson = new PersonType();
console.log(instancePerson.getAge());

// 아래 2가지 방식의 차이는?
// const instancePerson = new PersonType();  //1
// const person2 = { age: 35 };  //2

// 1은 생성자 정의 패턴. const instancePerson1 = new PersonType();, const instancePerson2 = new PersonType(); 처럼 생성자 재사용이 가능하지만, 여러 객체를 만들게 된다면 메모리 측면에 있어서 1번이 훨 효율적
// 2는 싱글톤 패턴. 한 번에 생성하여 할당하기 때문에 재사용이 힘들다.

// 3. 모듈 + 사용자 정의 타입

// 모듈 패턴 쓰는 이유 : 값을 은닉하기 위해
// 근데 사용하고 싶다. 그러니 return 키워드로 값을 빼낸다.
function PersonType2() {
  let age = 25;

  function innerPersonType() {}
  innerPersonType.prototype.getAge = function () {
    return age;
  };

  return innerPersonType;
}
const Person3 = PersonType2();
const person3 = new Person3();
console.log(person3.getAge());

// 4. IIFE(즉시 실행 함수) 패턴으로 만들어보기
const PersonType4 = (function () {
  let age = 25;

  function innerPersonType() {}
  innerPersonType.prototype.getAge = function () {
    return age;
  };

  return innerPersonType;
})();

const person4 = new PersonType4();
console.log(person4.getAge());
