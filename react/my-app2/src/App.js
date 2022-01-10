import { useState } from 'react';
// 1. createGlobalStyle를 import 하고
import styled, {createGlobalStyle} from 'styled-components';
import './App.css';
import reset from 'styled-reset'
import Hello from './component/hello';
import Product from './component/product';

// 2. createGlobalStyle로 style 설정
const GlobalStyle = createGlobalStyle`
  ${reset}  
  body{font-size: 20px;}
`;  

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

  const UlStyle = styled.ul`
    padding: 10px;
    width: 200px;
    background-color: lavender;
    border: 3px solid darkgray;
    border-radius: 5px;
  `;
  // 이렇게 상속받아서 사용도 가능
  const RedUlStyle = styled(UlStyle)`
    background-color: red;
  `;

  return(
    <>
      <h1>메뉴와 페이지 입니다.</h1>
      <UlStyle>
        <li
          id='hello'
          style={listName === "hello" ? { color: "red" } : { color: "black" }}
          onClick={checkId}>Hello</li>
        <li 
          id='product'
          style={listName === "product" ? { color: "red" } : { color: "black" }}
          onClick={checkId}>Product</li>
      </UlStyle>
      
      <RedUlStyle>
        <li>test</li>
        <li>test</li>
      </RedUlStyle>

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

