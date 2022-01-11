import './App.css';
import React, { useState, useEffect, useRef } from 'react'; 

// Hook - 1.useEffect
function Counter() {
  const [count, setCount] = useState(0);
  const [render, setRender] = useState(false);
  const countUp = (e) => {
    setCount(count+1)
  }

  useEffect(() => {
    if(render){
      if(count%2){
        console.log('홀수!');
      }else{
        console.log('짝수!');
      }
    }
    setRender(true)
  }, [count])

  return(
    <>
      <div>{count}</div>
      <button onClick={countUp}>up!</button>
    </>

  )
}
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
// // Hook - 1.useEffect

// Hook - 2. useRef
function Login(){
  const emailInput = useRef();
  const pwInput = useRef();

  const [emailValue, setEmailValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  const inputCheck = (e) => {
    e.preventDefault();

    // 만약 값이 없다면?
    if((emailInput.current.value === '') || pwInput.current.value === ''){
      alert('이메일과 비밀번호 모두 입력해주세요.');
      if(emailInput.current.value === ''){
        emailInput.current.focus();
      }else{
        pwInput.current.focus();
      }
    }else{
      // 이메일과 비밀번호 값을 가져와 set 해주자
      setEmailValue(emailInput.current.value);
      setPwValue(pwInput.current.value);
    }
  };
  
  return (
    <form style={{ display: "flex", flexDirection: "column" }}>
      <label>이메일 : <input type="email" ref={emailInput}/></label>
      <label>비밀번호 : <input type="password" ref={pwInput}/></label>

      <button type="submit" style={{ width: "100px" }} onClick={inputCheck}>로그인</button>
      <span>입력한 이메일 : {emailValue}</span>
      <span>입력한 비밀번호 : {pwValue}</span>
    </form>
  )
}
// // Hook - 2. useRef





function App() {
  return (
    <>
      <h1>Hook</h1>
      <h2>1) useEffect</h2>
      <Counter/>
      <Time/>
      <h2>2) useRef</h2>
      <Login/>
    </>
  );
}

export default App;