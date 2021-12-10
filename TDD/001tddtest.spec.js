// 001tddtest.js 파일을 테스트하기 위한 tdd 스크립트 파일
// 반드시 이름이 동일하게 .js, .spec.js로 할 필요는 없지만 권장

// describe() : 테스트 유닛들의 모음. html로는 섹셔닝 함수라고 생각하면 좋다.
describe("테스트 입니다", () => {
  // it() : 테스트 유닛. describe안에 여러개일 수 있고, 그게 스펙의 수가 된다.
  it("덧셈을 하는 함수입니다", () => {
    let num = 10;

    // expect() : 실행할 함수의 결과값을 인수로 전달. 기대식
    // toBe() : 안에 내가 기대한 결과를 적고 일치하는지 확인.
    expect(plusOne(num)).toBe(11);
    // // 리팩토링 코드
    // expect(plusOne(num)).toBe(num+1);

    // --> plustOne(num)이라는 함수의 값이 11로 예상하는지 확인하는 코드
  });
});
