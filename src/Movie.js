import React from "react";
import PropTypes from "prop-types";

// state가 불필요하므로 함수형 컴포넌트로 작성
function Movie({ id, title, year, summary, poster }) {
  return <h4>{title}</h4>;
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
};

export default Movie;
