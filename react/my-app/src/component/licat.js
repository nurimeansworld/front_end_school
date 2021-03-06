import React from 'react';
import '../App.css';

// 6. component화
function Licat(props) {
  // 4. js를 적용해보자
  const text = '이건 js를 활용해 넣은 텍스트!';

  return (
    <>
      {/* 1. return에 최상위태그 div로 감싸는 컴포넌트 생성해보기 */}
			<h1>안녕, {props.name} 1호</h1>
			<h1>안녕, {props.name} 2호!</h1>

      {/* 2. class가 추가된 코드 넣어보기. class가 아닌 className임을 유의! */}
      <div className="newClass">class를 추가해본다.</div>

      {/* 3. inline 요소로 넣을 때에는 이렇게 */}
      <h1 style={{backgroundColor:"black", color:"white"}}>class를 inline으로 넣어본다</h1>

      {/* 4. js를 적용해보자 */}
      <p>{text}</p>
    </>
  );
}

export default Licat;