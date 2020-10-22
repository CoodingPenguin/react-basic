import React from "react";

class App extends React.Component {
  // 1. 객체 생성 시 호출
  constructor(props) {
    super(props);
    console.log("hello");
  }

  state = {
    count: 0,
  };

  // count state를 1 증가
  add = () => {
    console.log("add");
    this.setState((current) => ({ count: current.count + 1 }));
  };

  // count state를 1 감소
  minus = () => {
    console.log("minus");
    this.setState((current) => ({ count: current.count - 1 }));
  };

  // 3. 렌더링이 끝난 직후 호출
  componentDidMount() {
    console.log("component rendered");
  }

  // 4. state가 변경되고 렌더링이 끝난 후 호출
  componentDidUpdate() {
    console.log("I just updated");
  }

  // 5. 컴포넌트가 죽으면 호출
  componentWillUnmount() {
    console.log("Goodbye~");
  }

  // 2. 화면에 JSX를 렌더링
  render() {
    console.log("I'm rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}
export default App;
