import React from "react";
// 1. react-router-dom 설치, import
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';

import Home from './Components/Home';
import Hello from './Components/Hello';
import Time from './Components/Time';
// 6. 중첩 라우터 - ResumeRouter 추가
// import Resume from './Components/Resume';
import ResumeRouter from './Components/ResumeRouter';

function One(){
  return <h1>Route One</h1>
}

function App() {
  return (
  //  2. BrowserRouter 설정
    <BrowserRouter>
      {/* 4. a 태그 대신 Link 태그! */}
      {/* 이렇게 to에 문자열이나 객체를 넣을 수 있다 */}
      <Link to={{
          pathname: "/courses",
          search: "?sort=name",
          hash: "#the-hash",
          state: { fromDashboard: true }
        }}
      >객체 예시용</Link>
      <Link to="/" style={{ margin: "0 5px" }}>HOME</Link>
      <Link to="/one" style={{ margin: "0 5px" }}>One</Link>
      <Link to="/hello" style={{ margin: "0 5px" }}>Hello</Link>
      <Link to="/time" style={{ margin: "0 5px" }}>Time</Link>
      <Link to="/resume" style={{ margin: "0 5px" }}>Resume</Link>

      {/* 라우트를 감싸줍니다. */}
      {/* 3. path, path-exact, component, component-props 설정 방법 */}
      {/* 5. Switch를 추가하면 제일 첫째로 매칭된 것을 렌더링. exact 작성을 최소화 할 수 있다. */}
      <Routes> 
        <Route path="/" element={Home}/>
        <Route path="/one" element={One}/>
        {/* 3-1. component props render 값으로 전달 */}
        <Route path="/hello" element={() => <Hello name="개리" />} />
        <Route path="/Time" element={Time}/>
        {/* 3-2. component props 자식으로 전달 */}
        <Route path="/Resume" element={ResumeRouter}>
          {/* <Resume
            hello="Hello"
            name="개리"
            hobby="게임"
            food="고기"
            color="blue"
          /> */}
        </Route>
      </Routes>
      {/* 6. v6 문법으로 변경 */}
      {/* 1) Switch ->  Routes로, Route는 반드시 Routes로 감싸기
      2) exact 생략 가능
      3) Route component 반드시 element로 전달 */}
    </BrowserRouter>
   
  );
}

export default App;