import React from "react";
import "./CuratedCards.scss";
import { BsArrowRight } from "react-icons/bs";
import BestSeller from "../../assets/bestseller.jpg";
import ShopWomen from "../../assets/shopwomen.jpg";
import ShopMen from "../../assets/shopmen.jpg";
import Casual from "../../assets/casual.jpg";

const CurratedCards = () => {
  return (
    <div className="CurratedCards">
      <div className="curratedCard">
        <div className="title_placeholder_currated">
          <button className="title_currated">
            Best Seller <BsArrowRight size={20} />
          </button>
        </div>
        <div className="backdrop2"></div>
        <img src={BestSeller} loading={"lazy"} />
      </div>
      <div className="curratedCard">
        <div className="title_placeholder_currated">
          <button className="title_currated">
            Shop Men <BsArrowRight size={20} />
          </button>
        </div>
        <div className="backdrop2"></div>
        <img src={ShopMen} className="menshoppic" loading={"lazy"} />
      </div>
      <div className="curratedCard">
        <div className="title_placeholder_currated">
          <button className="title_currated">
            Shop Women <BsArrowRight size={20} />
          </button>
        </div>
        <div className="backdrop2"></div>
        <img src={ShopWomen} className="womenshoppic" loading={"lazy"} />
      </div>
      <div className="curratedCard">
        <div className="title_placeholder_currated">
          <button className="title_currated">
            Shop Casual <BsArrowRight size={20} />
          </button>
        </div>
        <div className="backdrop2"></div>
        <img src={Casual} loading={"lazy"} />
      </div>
    </div>
  );
};

export default CurratedCards;
