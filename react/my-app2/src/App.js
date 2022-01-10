import { useState } from 'react';
// 1. createGlobalStyle를 import 하고
import { createGlobalStyle } from 'styled-components';
import './App.css';
import Hello from './component/hello';
import Product from './component/product';

// 2. createGlobalStyle로 style 설정
const GlobalStyle = createGlobalStyle`ul {background-color: darkgrey;}`;

function PageContent(listName) {
  if(listName.checkListName === 'hello'){
    return(
      <Hello name="loopy"/>
    )

  }else if(listName.checkListName === 'product'){
    return(
    <Product />
    )

  }
}
function Navbar() {
  const [listName, setListName] = useState('hello');
  const checkId = (e) => {
    setListName(e.target.id);
  }

  return(
    <>
      <h1>메뉴와 페이지 입니다.</h1>
      <ul className='nav-list'>
        <li
          id='hello'
          style={listName === "hello" ? { color: "red" } : { color: "black" }}
          onClick={checkId}>Hello</li>
        <li 
          id='product'
          style={listName === "product" ? { color: "red" } : { color: "black" }}
          onClick={checkId}>Product</li>
      </ul>
      <PageContent checkListName={listName}/>

    </>
  )
}

function App() {
  return (
  <>
    {/* 3. 여기에 선언 */}
    <GlobalStyle/>
    <Navbar />
  </>
  );
}

export default App;

