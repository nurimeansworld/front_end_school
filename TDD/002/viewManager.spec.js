describe("클릭이벤처리 및 뷰를 담당하는 함수입니다.", () => {
  //dependency injection (의존 주입)
  let textManager, viewerEl, btnEl, inpTxt, viewManager;

  // 2.
  beforeEach(() => {
    textManager = new TextManager();
    viewerEl = document.createElement("strong");
    btnEl = document.createElement("button");
    inpTxt = document.createElement("input");

    viewManager = new ViewManager(textManager, { viewerEl, btnEl, inpTxt });
  });

  // 1.
  // expect() : 인자가 전달되는지 확인하는 함수
  it("viewManager 에 인자가 잘 전달됐는지 확인합니다.", () => {
    const textManager = null;
    const btnEl = null;
    const viewerEl = null;
    const inpTxt = null;

    // 2.
    // const viewManager = new ViewManager(textManager, { btnEl, viewerEl, inpTxt });
    const actual = () =>
      new ViewManager(textManager, { btnEl, viewerEl, inpTxt });

    expect(actual).toThrowError();
  });

  // 3.
  // spyOn() : 특정한 모듈의 함수를 감시하는 메소드
  // toHaveBeencalled() : 함수가 호출된 적 있는지 확인하는 메소드
  it("click 이벤트가 발생했을 경우 changeValue 함수를 실행합니다.", () => {
    spyOn(viewManager, "changeValue");
    btnEl.click();
    expect(viewManager.changeValue).toHaveBeenCalled();
  });

  // 4.
  it("updateView 함수를 실행합니다.", () => {
    // 특정한 모듈의 함수를 감시합니다.
    spyOn(viewManager, "updateView");
    viewManager.changeValue();
    // toHaveBeenCalled : 함수가 호출이 된적이 있는지 판별합니다.
    expect(viewManager.updateView).toHaveBeenCalled();
  });
});
