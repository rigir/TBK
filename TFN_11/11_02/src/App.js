import React, { useState, useEffect } from "react";
import { MealesContext } from "./context/Meales";
import axios from "axios";
import "./style.css";

import Gallery from "./components/Gallery";

axios.defaults.baseURL = "https://www.themealdb.com/api/json/v1/1";

export default function App() {
  const [meales, setMeales] = useState([]);

  async function fetchMeales(number) {
    for (let i = meales.length; i < number; i++) {
      await axios.get("/random.php")
        .then((res) => {
          const meal = res.data.meals[0];
          if (!meales.find(i => i.idMeal === meal.idMeal)) {
            setMeales(meales => meales.concat(meal));
          }
        }, (error) => {
          console.log(error);
        });
    }
  }

  useEffect(() => {
    fetchMeales(2);
  }, []);


  return (
    <MealesContext.Provider value={{ meales, setMeales }}>
      <Gallery />
    </MealesContext.Provider>
  );
}
