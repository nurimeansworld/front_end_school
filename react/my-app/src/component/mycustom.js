import React from 'react';

function Mycustom(props) {

  return(
    <>
      <p>이름 : {props.name}</p>
      <p>색상 : {props.color}</p>
      <p>좋아하는 음식 : {props.food}</p>
    </>
  );
}

export default Mycustom;