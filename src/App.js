import React from "react";
// 컴포넌트 내에서 리액트를 임포트 하지 않으면
// 리액트는 이게 jsx사용한 컴포넌트라는 것 모름

// 컴포넌트 : html리턴하는 함수, 대문자로 시작해야함
// jsx는 javascript안의 HTML, Javascript+HTML
// jsx는 자식 컴포넌트에 props로 data전달 할 수 있다
// 전달받은 데이터에 따라 컴포넌트 재사용 가능
import PropTypes from "prop-types";

class App extends React.Component {
  // 변동되는 데이터는 class component의 state를 사용
  // state는 객체
  state = {
    count: 0,
  };

  // 클래스 내부에서
  // 1) add() {..} 이렇게 하면 undefined에서 setState를 실행할 수 없대, this가 undefined인가봐
  // 2) add = () => {...} 의 차이가 뭘까?
  // https://ko.javascript.info/class#ref-41 2) 은 클래스필드, 인스턴스에만 클래스 필드가 설정됨
  // 클래스 필드는 독립적인 객체를 만들고 this를 해당 객체에 바인딩
  // 1)은 Class.prototype.add 함수
  // 2)는 instance.add에만 있는 함수

  // this.state.count = 1; 이런식으로 직접적으로 state를 변경하면
  // render함수가 실행되지 않는다(값이 달라져도 화면은 그대로임)
  // setState()함수에 새로운 state객체를 넘겨줘야 값도 업데이트 되고 render함수도 실행됨
  // setState함수에 this.state를 바로쓰는건 퍼포먼스 이슈가 있음
  // 외부 상태 this.state 에 의존하지 않기 위해 current를 인자로 받는 콜백함수를 사용한다

  // **setState 실행할 때 마다 새로운 state를 가지고 render가 재실행됨**
  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
    console.log("add");
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
    console.log("minus");
  };
  componentDidMount() {
    console.log("component rendered(mounted)");
  }
  componentDidUpdate() {
    console.log("component updated");
  }
  render() {
    console.log("i am rendering");
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>add</button>
        <button onClick={this.minus}>minus</button>
      </div>
    );
  }
}
export default App;
