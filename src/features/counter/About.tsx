import React from "react";
import { Link, withRouter } from "react-router-dom";
import { useHistory } from "react-router";

const About = () => {
  const history = useHistory();
  const a = () => {
    const b = 1;
    history.push({ pathname: `/mypage/${b}`, state: { detail: 1 } });
  };
  return (
    <div>
      <button onClick={a}>ホームへ</button>
      aboutです
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
    </div>
  );
};

export default About;
