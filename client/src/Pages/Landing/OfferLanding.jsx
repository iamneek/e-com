import React from "react";
import "./OfferLanding.scss";
import { BsArrowRight } from "react-icons/bs";
import Offer_pic from "../../assets/footerimg.jpeg";
const OfferLanding = () => {
  return (
    <div className="offer_container">
      <div className="img">
        <img src={Offer_pic} />
      </div>
      <div className="offer_box">
        <p>LIMITED OFFER</p>
        <h1>35% off only this friday and get special gift</h1>
        <button className="btnn grab_offer_btn">
          Grab it now <BsArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default OfferLanding;
