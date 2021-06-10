import React, { useState, useEffect, Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { useHistory } from "react-router";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { ListUserInfoAsync, selectCount } from "./userSlice";

const About = () => {
  const [User, SetUser] = useState([]);
  const history = useHistory();
  const dispatch = useAppDispatch();
  useEffect(() => {
    const getUserInfo = async () => {
      const result = await dispatch(ListUserInfoAsync());
      console.log(result);
      SetUser(result.payload);
    };
    getUserInfo();
  }, []);
  const a = (id) => {
    console.log(id);
    history.push({ pathname: `/mypage/${id}`, state: { detail: id } });
  };
  return (
    <div>
      <button onClick={a}>ホームへ</button>
      aboutです
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <div>
        {User.map((user, index) => (
          <div key={index}>
            <div onClick={() => a(user.id)}>{user.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
