import React, { useState, useEffect } from "react";

import { useAppSelector, useAppDispatch } from "./app/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from "./features/counter/userSlice";
import "./App.css";

function App() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [id, Setid] = useState("");
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
      Setid(a.payload.id);
      await fetchCount(a.payload.id);
    };
    fet();
  }, []);

  const fetchCount = (id: number) => {
    const result = fetch(`http://localhost:3000/company/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        return res;
      });
    return result;
  };

  return <div className="App"></div>;
}

export default App;
