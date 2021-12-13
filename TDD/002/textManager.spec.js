describe("텍스트 관리자입니다.", () => {
  it("텍스트 값을 전달합니다.", () => {
    const textManager = new TextManager();
    const initValue = textManager.getValue();
    expect(textManager.getValue()).toBe(initValue);
  });

  it("텍스트 값을 수정합니다.", () => {
    const textManager = new TextManager();
    const newText = { data: "Hello Zebras" };
    textManager.setValue(newText);

    expect(textManager.getValue()).toBe(newText.data);
  });
});
