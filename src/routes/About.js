import React from "react";
import "./About.css";

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <p>This page is maden using React.</p>
      <p>React is so fun!</p>
    </div>
  );
}

export default About;
