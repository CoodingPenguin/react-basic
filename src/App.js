import React from "react";
import PropTypes from "prop-types";

// Food 컴포넌트 정의
function Food({ name, picture, rating }) {
  return (
    <div>
      <h3>I like {name}❤</h3>
      <p>{rating} / 5</p>
      <img src={picture} width="320px" alt={name} />
    </div>
  );
}

// 서버 데이터
const foodLikes = [
  {
    id: 1,
    name: "makchang",
    image:
      "https://lh3.googleusercontent.com/proxy/KozhupiTvsaxP8QCHYVkS8ykYEMUisSnQdQNpjo-aSRYjw0SNTg8bxytkpWX6BtltP8DFDAX2HoiJDNzMdvCKVprUKSeoZ1LeRIUuyd_RnoUXkQ3mPs",
    rating: 5,
  },
  {
    id: 2,
    name: "jokbal",
    image: "https://image.auction.co.kr/itemimage/1d/4c/66/1d4c66f2a6.jpg",
    rating: 4,
  },
  {
    id: 3,
    name: "oil pasta",
    image:
      "https://mp-seoul-image-production-s3.mangoplate.com/added_restaurants/618254_1474937856744072.jpg?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80",
    rating: 3,
  },
  {
    id: 4,
    name: "cheese burger",
    image: "https://image.auction.co.kr/itemimage/19/d2/93/19d2932eb6.jpg",
    rating: 3,
  },
];

// App 컴포넌트 정의
function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodLikes.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

// Food 컴포넌트 props 검사
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default App;
