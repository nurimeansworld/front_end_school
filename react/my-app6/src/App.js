// import './App.css';
import React from "react";

const HelloNuri = (props) => {
  const id = props.value.id;
  const name = props.value.name;

  return(
    <div>
      <h2>id : {id}</h2>
      <p>name : {name}</p>
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
