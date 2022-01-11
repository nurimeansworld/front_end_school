import React from "react";
// 1. react-router-dom 설치, import
import { BrowserRouter, Route, Link } from "react-router-dom";

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
    </BrowserRouter>
   
  );
}

export default App;