import React from 'react';
import '../App.css';

function Today() {
  let today = new Date();

  return(
    <>
      {/* 최상위태그는 하나만! 여기부터는 jsx! 주석은 이런식으로 작성 */}
      <div className="today-sec">
        <p>지금은 {today.getFullYear()}년 {today.getMonth()+1}월 {today.getDate()}일 {today.getHours()+':'+today.getMinutes()+':'+today.getSeconds()} 입니다.</p>
      </div>
		</>
  );
}

export default Today;