import React from "react";
import "./FeaturesCards.scss";
import { TbTruckLoading, TbTruckDelivery, TbMoodDollar } from "react-icons/tb";
import { PiMaskHappy } from "react-icons/pi";
const FeaturesCard = () => {
  return (
    <div className="FeaturesCard">
      <div className="card_icon">
        <div className="original_product card_icons">
          <div className="icon_card">
            <TbMoodDollar size={28} />
          </div>
          <div className="content_landing_icons">
            <h3>Original Products</h3>
            <p>
              We provide money back guarantee if the product are not original
            </p>
          </div>
        </div>
        <div className="satisfaction card_icons">
          <div className="icon_card">
            <PiMaskHappy size={28} />
          </div>
          <div className="content_landing_icons">
            <h3>Satisfaction Guarantee</h3>
            <p>
              Exchange the product you've purchased if it doesn't fit on you
            </p>
          </div>
        </div>
        <div className="new_arrival card_icons">
          <div className="icon_card">
            <TbTruckLoading size={28} />
          </div>
          <div className="content_landing_icons">
            <h3>New Arrival Everyday</h3>
            <p>We update our collections almost everyday</p>
          </div>
        </div>
        <div className="fast_shipping card_icons">
          <div className="icon_card">
            <TbTruckDelivery size={28} />
          </div>
          <div className="content_landing_icons">
            <h3>Fast & Free Shipping</h3>
            <p>We offer fast and free shipping for our loyal customers</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
