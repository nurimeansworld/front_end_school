// import './App.css';
import React, { createContext } from "react";

const userInfo = createContext({id: 'nuriisfree', name: 'nuri'});

const HelloNuri2 = (props) => {

  return(
    <div>
      <h2>Two : {props.value.id}</h2>
      <strong>Two : {props.value.name}</strong>
    </div>
  );
}
const HelloNuri = (props) => {
  const id = props.value.id;
  const name = props.value.name;

  return(
    <div>
      <h2>id : {id}</h2>
      <p>name : {name}</p>
      <HelloNuri2 value={{id, name}}/>
    </div>
  );
}

function App() {
  return (
    // <>
    //   <HelloNuri value={{id: 'nuriisfree', name: 'nuri'}}/>
    // </>
    // 이렇게 createContext한 변수에 .consumer 메소드를 이용해 값을 받아와 진행
    <userInfo.Consumer>
      {(value) => (<HelloNuri value={value} />)}
    </userInfo.Consumer>
  );
}

export default App;
