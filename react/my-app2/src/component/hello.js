import React from 'react';

function Noname() {
  return(
    <>
      <p>name이 입력되지 않았습니다.</p>
    </>
  )
}
function Hello(props){
  const name = props.name;
  const num = [1, 2, 3, 4, 5];
  
  const numComponentsArray = num.map((i) => (
    <h1 key={i.toString()}>
      안녕~ {name} {i}호~
    </h1>
  ));
  // if문으로 return을 각각 설정하여 조건처리
  if(name){
    return(
      <>
        {numComponentsArray}
      </>
    )
  }else{
    return(
      <>
        <Noname />
      </>
    )
  }
}

export default Hello;