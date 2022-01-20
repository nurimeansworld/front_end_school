// import './App.css';
import React, { createContext, useContext } from "react";

const userInfo = createContext({id: 'nuriisfree', name: 'nuri'});

const HelloNuri2 = () => {
  const {id, name} = useContext(userInfo);
  return(
    <div>
      <h2>2. id : {id}</h2>
      <strong>2. name : {name}</strong>
    </div>
  );
}
const HelloNuri = () => {
  // const id = props.value.id;
  // const name = props.value.name;
  const {id, name} = useContext(userInfo);

  return(
    // <userInfo.Consumer>
    //   {(value) => (
    //     <div>
    //       <h2>1. id : {value.id}</h2>
    //       <p>2. name : {value.name}</p>
    //       <HelloNuri2 value={value} />
    //     </div>
    //   )}
    // </userInfo.Consumer>
    <div>
      <h2>1. id : {id}</h2>
      <p>1. name : {name}</p>
      <HelloNuri2/>
    </div>
  );
}

function App() {
  return (
    // 1. 그냥 props로 값 전달하기
    // <>
    //   <HelloNuri value={{id: 'nuriisfree', name: 'nuri'}}/>
    // </>

    // 2. createContext : 이렇게 createContext한 변수에 .consumer 메소드를 이용해 값을 받아와 진행
    //  <>
    //   <userInfo.Consumer>
    //     {(value) => (<HelloNuri value={value} />)}
    //   </userInfo.Consumer>
      
    //   <userInfo.Provider value={{ name: "ali", id: "nodeMaster" }}>
    //     <HelloNuri/>
    //   </userInfo.Provider>
    // </> 

    // 3. useContext : Hook 이용하기
    <>
      <HelloNuri/>
    </>
  );
}

export default App;
