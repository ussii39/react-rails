import React, { FC, useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

const Mypage = (props: any) => {
  const location = useLocation();
  const params = useParams();
  useEffect(() => {
    console.log(params);
    console.log(location.state.detail);
  }, []);
  return (
    <div>
      mypage
      <div>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
      </div>
    </div>
  );
};

export default Mypage;
