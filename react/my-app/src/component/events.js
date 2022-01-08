import React, {useState} from 'react';

function Events() {
  const onMouseEnter = () => {
    console.log('onMouseEnter :', 'Hi~👋');
  }
  const onMouseLeave = () => {
    console.log('onMouseLeave :', 'Bye~✋');
  }
  const styles = {margin: "0 auto", padding: "50px 0", width: "300px", background: "thistle"};

  // event, useState
  const [userId, setuserId] = useState("");
  const [userPw, setuserPw] = useState("");
  const loginSubmit = (e) => {
    e.preventDefault();  // 기존 동작 초기화
    // console.log(e);
  }
  const chagneuserId = (e) => {
    setuserId(e.target.value);
    // console.log(userId);
  }
  const chagneuserPw = (e) => {
    setuserPw(e.target.value);
    // console.log(userPw);
  }

  return (
    <>
      <p style={styles} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>마우스를 올려보세요</p>

      <form onSubmit={loginSubmit}>
        <label for="userId">아이디</label>
        <input type="text" id="userId" onChange={chagneuserId}></input>
        <label for="userPw">비밀번호</label>
        <input type="password" id="userPw" onChange={chagneuserPw}></input>
        <button>입력</button>
      </form>
      <p>입력한 내용은 id: {userId} / pw: {userPw}</p>
    </>
  );
}

export default Events;