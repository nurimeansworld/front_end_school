import React, { useState }from 'react';
// useState를 이용해 전체 렌더링이 아닌 컴포넌트 렌더링을 하여 더 효율적으로 실행

function Mycustom(props) {
  const [like, setLike] = useState(0);
  // console.log(useState(0));

  function addLike() {
    setLike(like + 1);
  }
  function hideLike() {
    setLike(0);
  }

  return(
    <>
      <p>이름 : {props.name}</p>
      <p>색상 : {props.color}</p>
      <p>좋아하는 음식 : {props.food}</p>

      <button onClick={addLike}>좋아요++ <span>{like}</span></button>
      <button onClick={hideLike}>좋아요 초기화 <span>{like}</span></button>
    </>
  );
}

export default Mycustom;