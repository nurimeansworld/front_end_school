// import './App.css';
// import React, { fragment } from 'react';  // 5. fragment 활용
import Licat from './component/licat';
import Today from './component/today';
import Mycustom from './component/mycustom';
  
function App() {
  return (
    <>
      <Licat name="개리"/>
      <Today />
      <Mycustom name="누리" color="lavendar" food="소이템페롤"/>
    </>
  );
}

export default App;