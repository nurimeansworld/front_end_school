import React from "react";
// 1. react-router-dom 설치, import
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from './Components/Home';
import Hello from './Components/Hello';
import Time from './Components/Time';
import Resume from './Components/Resume';

function One(){
  return <h1>Route One</h1>
}

function App() {
  return (
  //  2. BrowserRouter 설정
    <BrowserRouter>
      {/* <Routes> */}
        {/* 라우트를 감싸줍니다. */}
        {/* 3. path, path-exact, component, component-props 설정 방법 */}
        <Route path="/" exact component={Home}/>
        <Route path="/one" component={One}/>
        {/* 3-1. component props render 값으로 전달 */}
        <Route path="/hello" exact render={() => <Hello name="개리" />} />
        <Route path="/Time" exact component={Time}/>
        {/* 3-2. component props 자식으로 전달 */}
        <Route path="/Resume" exact>
          <Resume
            hello="Hello"
            name="개리"
            hobby="게임"
            food="고기"
            color="blue"
          />
        </Route>
      {/* </Routes> */}
    </BrowserRouter>
   
  );
}

export default App;