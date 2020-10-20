import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// App 컴포넌트를 id가 root인 element 사이에 렌더링
// 리액트는 최종으로 단 한 개의 컴포넌트만 렌더링
ReactDOM.render(<App />, document.getElementById("root"));
