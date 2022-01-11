import './App.css';
// 1. useEffect import
import React, { useState, useEffect } from 'react'; 


function Counter() {
  const [count, setCount] = useState(0);
  const [render, setRender] = useState(false);
  const countUp = (e) => {
    setCount(count+1)
  }

  useEffect(() => {
    // 2. useEffect 설정하여 감지할 동작 설정
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
function App() {
  return (
    <div className="App">
      <Counter/>
    </div>
  );
}

export default App;