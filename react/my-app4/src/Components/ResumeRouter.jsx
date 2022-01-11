import React from 'react';
import { Route, Routes, Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Resume from './Resume';

const resumeId = ({ match }) => {
  let result = 0;

  switch (match.path) {
    case '/Resume/1':
      result = { hello: "Hello", name: "누리", hobby: "독서", food: "소이템페롤", color: "lavender" };
      break;

    case '/Resume/2':
      result = { hello: "Hello", name: "구리", hobby: "요가", food: "상추", color: "brown" };
      break;

    case '/Resume/3':
      result = { hello: "Hello", name: "보리", hobby: "드라이브", food: "피자", color: "red" };
      break;

    default:
      result = { hello: "Hello", name: "개리", hobby: "게임", food: "고기", color: "blue" };
      break;
  }
  return (
    <>
      <Outlet />
      <Resume hello={result.hello} name={result.name} hobby={result.hobby} food={result.food} color={result.color} />
    </>
  )
}

const ResumeRouter = ({ match }) => {
  return (
    <>
      <Link to="/resume/1" style={{ margin: "0 5px" }}>Resume1</Link>
      <Link to="/resume/2" style={{ margin: "0 5px" }}>Resume2</Link>
      <Link to="/resume/3" style={{ margin: "0 5px" }}>Resume3</Link>

      <Routes> {/* 6. v6 문법으로 변경 */}
        {/* <Route>
          <Resume
            hello="Hello"
            name="개리"
            hobby="게임"
            food="고기"
            color="blue"
          />
        </Route> */}
        {/* <Route path="/resume/1" component={resumeId}></Route>
        <Route path="/resume/2" component={resumeId}></Route>
        <Route path="/resume/3" component={resumeId}></Route> */}

        <Route path={match.path} element={resumeId}></Route>
        <Route path={`${match.path}/1`} element={resumeId}></Route>
        <Route path={`${match.path}/2`} element={resumeId}></Route>
        <Route path={`${match.path}/3`} element={resumeId}></Route>
      </Routes>
    </>
  )
}
export default ResumeRouter;