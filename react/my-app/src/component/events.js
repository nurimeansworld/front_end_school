import React, {useState} from 'react';

function Events() {
  const onMouseEnter = () => {
    console.log('onMouseEnter :', 'Hi~๐');
  }
  const onMouseLeave = () => {
    console.log('onMouseLeave :', 'Bye~โ');
  }
  const styles = {margin: "0 auto", padding: "50px 0", width: "300px", background: "thistle"};

  // event, useState
  const [userId, setuserId] = useState("");
  const [userPw, setuserPw] = useState("");
  const loginSubmit = (e) => {
    e.preventDefault();  // ๊ธฐ์กด ๋์ ์ด๊ธฐํ
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
      <p style={styles} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>๋ง์ฐ์ค๋ฅผ ์ฌ๋ ค๋ณด์ธ์</p>

      <form onSubmit={loginSubmit}>
        <label for="userId">์์ด๋</label>
        <input type="text" id="userId" onChange={chagneuserId}></input>
        <label for="userPw">๋น๋ฐ๋ฒํธ</label>
        <input type="password" id="userPw" onChange={chagneuserPw}></input>
        <button>์๋ ฅ</button>
      </form>
      <p>์๋ ฅํ ๋ด์ฉ์ id: {userId} / pw: {userPw}</p>
    </>
  );
}

export default Events;