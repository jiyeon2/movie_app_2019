import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    //리다이렉션
    const { location, history } = this.props;
    if (!location.state) {
      history.push("/");
    }
  }

  render() {
    // render 실행 후 componenetDidMount실행됨
    // locations이 없으면(라우터 링크로 접근한 것이 아니면) 에러남
    const { location } = this.props;
    if (location.state) {
      return (
        <div>
          <div className="detail">
            <img
              className="detail__image"
              src={location.state.poster}
              alt={`${location.state.title} poster`}
              title={location.state.title}
            />
            <h2 className="detail__title">{location.state.title}</h2>
            <div className="detail__year">{location.state.year}</div>
            <div className="detail__genre">
              {location.state.genres.map((genre, i) => {
                return (
                  <span key={i}>
                    {genre}
                    {i === location.state.genres.length - 1 ? "" : ",  "}
                  </span>
                );
              })}
            </div>
            <div className="detail__summary">{location.state.summary}</div>
          </div>
        </div>
      );
    } else {
      // location.state가 없으면 null리턴 후 componentDidMount실행되어 리다이렉션 발생
      return null;
    }
  }
}

export default Detail;
