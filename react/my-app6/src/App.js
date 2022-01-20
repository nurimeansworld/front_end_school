// import './App.css';
import React from "react";

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
    <>
      <HelloNuri value={{name: 'nuri', id: 'nuriisfree'}}/>
    </>
  );
}

export default App;
