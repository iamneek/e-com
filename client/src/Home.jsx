import React from "react";
import HomeSlider from "./Pages/Landing/HomeSlider";
import "./Home.scss";
import Adidas from "./assets/adidas.png";
import Calvin from "./assets/calvin.png";
import Chanel from "./assets/chanel.png";
import DandDG from "./assets/dandg.png";
import Gucci from "./assets/gucci.png";
import Guess from "./assets/guess.png";
import Levi from "./assets/levi.png";
import Vercase from "./assets/Vercase.png";
import FeaturesLanding from "./Pages/Landing/FeaturesLanding";
import FeaturesCard from "./Pages/Landing/FeaturesCard";
import CuratedPicks from "./Pages/Landing/CuratedPicks";
import FeaturedProduct from "./Pages/Landing/FeaturedProduct";
import OfferLanding from "./Pages/Landing/OfferLanding";
import SubscribeNewsletter from "./Pages/Landing/SubscribeNewsletter";

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
      <div className="featureLanding">
        <FeaturesLanding />
        <FeaturesCard />
      </div>
      <div className="CurratedPicksLanding">
        <CuratedPicks />
      </div>
      <div className="FeaturedProductList">
        <FeaturedProduct />
      </div>
      <div className="bar_landing">
        <div className="bar_progress_handle_landing"></div>
      </div>
      <div className="offer_landing_page">
        <OfferLanding />
      </div>
      <div className="newsletter_landing_page">
        <SubscribeNewsletter />
      </div>
    </div>
  );
};

export default Home;
