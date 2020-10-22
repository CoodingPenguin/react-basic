import React from "react";

// Food 컴포넌트 정의
function Food({ name, picture }) {
  return (
    <div>
      <h3>I like {name}❤</h3>
      <img src={picture} width="320px" />
    </div>
  );
}

// 서버 데이터
const foodLikes = [
  {
    id: 1,
    name: "MAKCHANG",
    image:
      "https://lh3.googleusercontent.com/proxy/KozhupiTvsaxP8QCHYVkS8ykYEMUisSnQdQNpjo-aSRYjw0SNTg8bxytkpWX6BtltP8DFDAX2HoiJDNzMdvCKVprUKSeoZ1LeRIUuyd_RnoUXkQ3mPs",
  },
  {
    id: 2,
    name: "JOKBAL",
    image: "https://image.auction.co.kr/itemimage/1d/4c/66/1d4c66f2a6.jpg",
  },
  {
    id: 3,
    name: "OIL PASTA",
    image:
      "https://mp-seoul-image-production-s3.mangoplate.com/added_restaurants/618254_1474937856744072.jpg?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80",
  },
  {
    id: 4,
    name: "CHEESE BURGER",
    image: "https://image.auction.co.kr/itemimage/19/d2/93/19d2932eb6.jpg",
  },
];

// App 컴포넌트 정의
function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodLikes.map((dish) => (
        <Food name={dish.name} picture={dish.image} />
      ))}
    </div>
  );
}

export default App;
