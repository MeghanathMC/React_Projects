import React, { useState } from "react";
import "./App.css";
import Products from "./Products";

const App = () => {
  const [search, setSearch] = useState("");
  const YOUR_APP_ID = "701555b0";
  const YOUR_APP_KEY = "38b680b773c0a99f1c6b3a1d9b00456c";
  const [data, setData] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const url = fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=10&calories=591-722&health=alcohol-free`
    );
    url.then((response) => response.json()).then((data) => setData(data.hits));

    console.log(data);
  };
  return (
    <center className="food">
      <h2>Food Recipe App </h2>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <br></br> <br></br>
        <input type="submit" className="btn btn-primary" value="Search" />
      </form>
      {data.length >= 1 ? <Products data={data} /> : null}
    </center>
  );
};

export default App;
