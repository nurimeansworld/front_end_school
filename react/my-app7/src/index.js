import ReactDOM from "react-dom";
import React, { Component } from "react";

class ClassComp extends Component {

  // mount : 처음 컴포넌트가 나타났을 때
  // update : 컴포넌트 상태 값이 바뀔 때
  // unmount : 컴포넌트가 사라질 때

  
  // 1. constructor
  constructor(props) {
    super(props);
    this.state = { number: 0 };
    console.log("1. mount: constructor");
  }

  UNSAFE_componentWillMount() {
		//컴포넌트가 생성될때 실행됩니다 (렌더링 되기 이전)
    console.log("2. mount: UNSAFE_componentWillMount 컴포넌트가 생성될때 실행됩니다 (렌더링 되기 이전)");
  }

  componentDidMount() {
	//마운트가 완료되고 나서 실행됩니다 (렌더링 이후) 
    console.log("3. mount: componentDidMount 마운트가 완료되고 나서 실행됩니다 (렌더링 이후) ");
  }

  shouldComponentUpdate(nextProps, nextState) {
		//상태 업데이트가 되고 컴포넌트가 업데이트 되기 전(렌더되기전) 실행됩니다.
		//초기렌더링에서 발생하지 않습니다.
    console.log("4. update: shouldComponentUpdate");
    return true;
  }

  UNSAFE_componentWillUpdate(nextProps, nextState) {
		//componentWillUPdate -> UNSAFE_componentWillUpdate()로 변경됨, 17버전 까지는 사용가능합니다.
		//초기렌더링에서 발생하지 않고, 그이후 업데이트가 되고나서 발생합니다.
    console.log("5. update: UNSAFE_componentWillUpdate");
  }

  componentDidUpdate(nextProps, nextState) {
		//업데이트가 되고나서 실행됩니다.
    console.log("6. update: componentDidUpdate");
  }

	componentWillUnmount() {
   //컴포넌트가 제거되기 바로 직전에 실행됩니다.
    console.log("7. unmount: componentWillUnmount");
  }
  

  handleClick = () => {
    this.setState((state) => {
      return {
        number: state.number + 1,
      };
    });
  };

  render() {
    console.log("render");
    return (
      <div>
        <button onClick={this.handleClick}>Click me!</button>
        <span>{this.state.number}</span>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return <ClassComp />;
  }
}

ReactDOM.render(<App />, document.getElementById("root"));