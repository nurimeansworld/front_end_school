import './App.css';
import React, { useState } from 'react';


function Counter() {
  const [count, setCount] = useState(0);
  const countUp = (e) => {
    setCount(count+1)
  }

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