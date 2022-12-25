import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";

axios.defaults.baseURL = "https://randomuser.me/api/";

export default function App() {
  const [loading, setLoading] = useState(false);
  const [person, setPerson] = useState({});

  async function fetchCurrentUser() {
    return await axios.get()
      .then((res) => {
        setPerson(res.data.results[0]);
        setLoading(true);
      }, (error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    fetchCurrentUser();
  }, []);

  return (
    <div>
      {loading ? (
        <>
          <div>{person.name.title}</div>
          <div>{person.name.first}</div>
          <div>{person.name.last}</div>
          <button onClick={() => fetchCurrentUser()}>New Data</button>
        </>) : ""}

    </div >
  );
}
