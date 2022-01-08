// import './App.css';
// import React, { fragment } from 'react';  // 5. fragment 활용
import Licat from './component/licat';
import Today from './component/today';
  
function App() {
  return (
    <>
      <Licat name="개리"/>
      <Today />
    </>
  );
}

export default App;