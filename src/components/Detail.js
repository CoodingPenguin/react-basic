import React from "react";

// 클래스형 컴포넌트로 정의
// 왜? Detail 컴포넌트가 마운트될 때 push 함수를 실행하기 위함
class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    // Home에서 오지 않을 때 Home으로 리다이렉트
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    return <span>test</span>;
  }
}

export default Detail;
