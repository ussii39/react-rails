import React, { useState, useEffect, Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from "./features/counter/userSlice";
import "./App.css";
import Mypage from "./features/counter/Mypage";
import About from "./features/counter/About";

function App() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [User, SetuUser] = useState([]);
  useEffect(() => {
    // fetch("https://rails-docker-api.herokuapp.com/posts")
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log("aaa");
    //     console.log(data);
    //   });
    const fet = async () => {
      const a: any = await dispatch(incrementAsync());
      const id = a.payload.id;
      console.log(id, "id");
      const user = await fetchCount(a.payload.id);
      SetuUser(user);
      console.log(user, "user");
    };
    fet();
  }, []);

  const fetchCount = async (id: number) => {
    const result: any = await fetch(`http://localhost:3000/company/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res, "res");
        return res;
      });
    return result;
  };

  return (
    <div className="App">
      <div>
        {/* {User.map((user: any, index) => (
          <div key={index}>
            <div>{user.name}</div>
          </div>
        ))} */}
        <div className="App">
          <Router>
            <div>
              <Route exact={true} path="/mypage" component={Mypage} />
              <Route exact={true} path="/mypage/:id" component={Mypage} />
              <Route path="/About" component={About} />
            </div>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
