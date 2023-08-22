import React from "react";
import HomeSlider from "./HomeSlider";
import "./Home.scss";
import Adidas from "./assets/adidas.png";
import Calvin from "./assets/calvin.png";
import Chanel from "./assets/chanel.png";
import DandDG from "./assets/dandg.png";
import Gucci from "./assets/gucci.png";
import Guess from "./assets/guess.png";
import Levi from "./assets/levi.png";
import Vercase from "./assets/Vercase.png";

const Home = () => {
  return (
    <div className="HomeComp">
      <HomeSlider />
      <div className="Brands">
        <h1>Brands</h1>
        <div className="brand_logos">
          <img src={Chanel} alt="Chanel" />
          <img src={Calvin} alt="Calvin" />
          <img src={Guess} alt="Guess" />
          <img src={Gucci} alt="Gucci" />
          <img src={DandDG} alt="D & DG" />
          <img src={Adidas} alt="Adidas" />
          <img src={Levi} alt="Levi" />
          <img src={Vercase} alt="Vercase" className="vercase" />
        </div>
      </div>
    </div>
  );
};

export default Home;
