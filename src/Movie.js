import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// state가 필요없으면 class componenet일 필요가 없다
// <img title=""> title 속성은 이미지에 마우스 가져갔을 때 툴팁이 뜸
// alt : 대체 정보, title :보충 정보
// JSX 는 javascript 임. js의 class 와 이름이 겹치므로  clssName으로 사용
// <label for 속성은 htmlFor로 써야함
function Movie({ year, title, summary, poster, genres }) {
  return (
    <div className="movie">
      <img src={poster} alt={`${title} poster`} title={title}></img>
      <div className="movie__data">
        <h3 className="movie__title">{title}</h3>
        <h5 className="movie__year">{year}</h5>
        <ul className="genres">
          {genres.map((genre, index) => (
            <li className="genres__genre" key={index}>
              {genre}
            </li>
          ))}
        </ul>
        <p className="movie__summary">{summary.slice(0, 140)}...</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
