let 호텔 = [
  {
    이름: "하나호텔",
    위치: "제주도 제주시 001",
    가격: { A: 50000, B: 30000, C: 15000 },
    방의개수: 50,
    예약자수: 25,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
  {
    이름: "둘호텔",
    위치: "제주도 제주시 002",
    가격: { A: 100000, B: 60000, C: 30000 },
    방의개수: 100,
    예약자수: 30,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
  {
    이름: "셋호텔",
    위치: "제주도 제주시 003",
    가격: { A: 80000, B: 50000, C: 30000 },
    방의개수: 120,
    예약자수: 80,
    남은방의개수: function () {
      return this.방의개수 - this.예약자수;
    },
  },
];
console.log(호텔[0].남은방의개수()); //75
console.log(호텔[1].남은방의개수()); //70
console.log(호텔[2].남은방의개수()); //40

function sayName() {
  console.log(this.name);
}
var name = "Hero";

let peter = {
  name: "Peter Parker",
  sayName: sayName,
};

let bruce = {
  name: "Bruce Wayne",
  sayName: peter.sayName,
};

bruce.sayName(); // Bruce Wayne

// call
var peter = {
  name: "Peter Parker",
  sayName: function () {
    console.log(this.name);
  },
};
var bruce = {
  name: "Bruce Wayne",
};
peter.sayName.call(bruce); //Bruce Wayne

// apply
var peter = {
  name: "Peter Parker",
  sayName: function (is, is2) {
    console.log(this.name + " is " + is + " or " + is2);
  },
};
var bruce = {
  name: "Bruce Wayne",
};
peter.sayName.apply(bruce, ["batman", "richman"]); //Bruce Wayne is batman or richman

// bind
function sayName() {
  console.log(this.name);
}
var bruce = {
  name: "bruce",
  sayName: sayName,
};
var peter = {
  name: "peter",
  sayName: sayName.bind(bruce),
};
peter.sayName(); // bruce
bruce.sayName(); // bruce

// closure
function makeAdder(x) {
  var y = 1;
  debugger;
  return function (z) {
    y = 100;
    debugger;
    return x + y + z;
  };
  debugger;
}
var add5 = makeAdder(5);
var add10 = makeAdder(10);
//클로저에 x와 y의 환경이 저장됨

console.log(add5(2)); // 107 (x:5 + y:100 + z:2)
console.log(add10(2)); // 112 (x:10 + y:100 + z:2)
//함수 실행 시 클로저에 저장된 x, y값에 접근하여 값을 계산

function 제곱(x) {
  function 승수(y) {
    return y ** x;
  }
  return 승수;
}
