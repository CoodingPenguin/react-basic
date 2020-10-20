import React from "react";

// Food 컴포넌트 정의
function Food({ fav }) {
  return <h3>I like {fav}❤</h3>;
}

// App 컴포넌트 정의
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="MAKCHANG" />
      <Food fav="JOKBAL" />
      <Food fav="OIL PASTA" />
    </div>
  );
}

export default App;
