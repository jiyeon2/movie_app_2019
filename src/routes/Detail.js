import React from "react";

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
      return <div>{location.state.title}</div>;
    } else {
      // location.state가 없으면 null리턴 후 componentDidMount실행되어 리다이렉션 발생
      return null;
    }
  }
}

export default Detail;
