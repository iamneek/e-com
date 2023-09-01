import React from "react";
import "./FeatureProductCard.scss";
import { LiaShoppingCartSolid } from "react-icons/lia";

const FeatureProductCard = ({ image, title, mp, sp, sale }) => {
  return (
    <div className="featured_card">
      <div className="img_container">
        {sale ? <div className="sale_badge">SALE</div> : null}
        <img src={image} alt={title} />
      </div>
      <div className="featureProductDetails">
        <h3>{title}</h3>

        <div className="cartspmp">
          <div className="spmp">
            <h2 className="sp">${sp}</h2>
            {mp ? <sup className="mp">${mp}</sup> : null}
          </div>
          <div className="cart_button_featured">
            <LiaShoppingCartSolid color="white" size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureProductCard;
