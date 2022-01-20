// import './App.css';
import React, { createContext } from "react";

const userInfo = createContext({id: 'nuriisfree', name: 'nuri'});

const HelloNuri2 = (props) => {

  return(
    <div>
      <h2>2. id : {props.value.id}</h2>
      <strong>2. name : {props.value.name}</strong>
    </div>
  );
}
const HelloNuri = (props) => {
  // const id = props.value.id;
  // const name = props.value.name;

  return(
    <userInfo.Consumer>
      {(value) => (
        <div>
          <h2>1. id : {value.id}</h2>
          <p>2. name : {value.name}</p>
          <HelloNuri2 value={value} />
        </div>
      )}
    </userInfo.Consumer>
  );
}

function App() {
  return (
    // <>
    //   <HelloNuri value={{id: 'nuriisfree', name: 'nuri'}}/>
    // </>
    // 이렇게 createContext한 변수에 .consumer 메소드를 이용해 값을 받아와 진행
   <>
    <userInfo.Consumer>
      {(value) => (<HelloNuri value={value} />)}
    </userInfo.Consumer>
    
    <userInfo.Provider value={{ name: "ali", id: "nodeMaster" }}>
      <HelloNuri/>
    </userInfo.Provider>
  </> 
  );
}

export default App;
