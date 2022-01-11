import './App.css';
// 1. useEffect import
import React, { useState, useEffect } from 'react'; 

// function Counter() {
//   const [count, setCount] = useState(0);
//   const [render, setRender] = useState(false);
//   const countUp = (e) => {
//     setCount(count+1)
//   }

//   useEffect(() => {
//     // 2. useEffect 설정하여 감지할 동작 설정
//     if(render){
//       if(count%2){
//         console.log('홀수!');
//       }else{
//         console.log('짝수!');
//       }
//     }
//     setRender(true)
//   }, [count])

//   return(
//     <>
//       <div>{count}</div>
//       <button onClick={countUp}>up!</button>
//     </>

//   )
// }
function Time() {
  const [today, setToday] = useState(new Date());
  // console.log('렌더링 확인용...');
  
  useEffect(() => {
    let current=  setInterval(() => { 
      let c = new Date();
      setToday(c);
      // console.log(c);
    }, 1000);
    
    // 이렇게 되면 1초씩이 초마다(예를 들어 1초에 1, 그 다음 1초에 1+1)추가되어 기하급수적으로 늘어남. 그래서 clearInterval 해야 함
    return () => {clearInterval(current)};
    }, [today]
  )
  let todayYear = today.getFullYear();
  let todayMonth= today.getMonth()+1;
  let todayDate = today.getDate();
  let todayTime = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;

  return(
    <p>지금은 {todayYear}년 {todayMonth}월 {todayDate}일 {todayTime} 입니다.</p>
  )
}

function App() {
  return (
    <div className="App">
      {/* <Counter/> */}
      <Time/>
    </div>
  );
}

export default App;