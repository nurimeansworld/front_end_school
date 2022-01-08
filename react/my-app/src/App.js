import './App.css';

function App() {
  // 4. js를 적용해보자
  const text = '이건 js를 활용해 넣은 텍스트!';
  let today = new Date();

  return (
    //여기는 js할 때와 똑같이 주석을 입력합니다!
    <div>
      {/* 최상위태그는 하나만! 여기부터는 jsx! 주석은 이런식으로 작성 */}

      {/* 1. return에 최상위태그 div로 감싸는 컴포넌트 생성해보기 */}
			<h1>안녕, 라이캣 1호</h1>
			<h1>안녕, 라이캣 2호!</h1>

      {/* 2. class가 추가된 코드 넣어보기. class가 아닌 className임을 유의! */}
      <div className="newClass">class를 추가해본다.</div>

      {/* 3. inline 요소로 넣을 때에는 이렇게 */}
      <h1 style={{backgroundColor:"black", color:"white"}}>class를 inline으로 넣어본다</h1>

      {/* 4. js를 적용해보자 */}
      <p>{text}</p>
			<div/>{/* 이런식으로 바로 닫히게 할 수도 있어요! */}

      <div className="today-sec">
        <p>지금은 {today.getFullYear()}년 {today.getMonth()+1}월 {today.getDate()}일 {today.getHours()+':'+today.getMinutes()+':'+today.getSeconds()} 입니다.</p>
      </div>
		</div>
  );
}
// function getCurrentTime() {

//   return (
//     <div>

//     </div>
//   );
// }

export default App;
// export default getCurrentTime;
