import React from "react";
import HomeSlider from "./HomeSlider";
import "./Home.scss";
const Home = () => {
  return (
    <div className="HomeComp">
      <HomeSlider />
      <div className="Brands">
        <h1>Brands</h1>
      </div>
    </div>
  );
};

export default Home;
