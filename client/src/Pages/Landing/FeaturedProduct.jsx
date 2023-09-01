import React from "react";
import "./FeaturedProduct.scss";
import FeatureProductCard from "./FeatureProductCard";
import featured1 from "../../assets/featured1.jpg";
import featured2 from "../../assets/featured2.jpg";
import featured3 from "../../assets/featured3.jpeg";
import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";

const FeaturedProduct = () => {
  return (
    <div className="FeaturedProduct">
      <div className="featureeed">
        <h1>Featured Products</h1>
        <div className="next_prev_banner2">
          <button className="prev_btn btnn">
            <TfiAngleLeft size={15} className="prev_icon" />
          </button>
          <button className="next_btn btnn">
            <TfiAngleRight size={15} />
          </button>
        </div>
      </div>
      <div className="featureproduct_cards">
        <FeatureProductCard
          title={"Autumn Dress"}
          mp={85}
          sp={58}
          sale={true}
          image={featured1}
        />
        <FeatureProductCard title={"Gray Shirt"} sp={87} image={featured2} />
        <FeatureProductCard
          title={"Leather Coat"}
          sp={32}
          mp={40}
          sale={true}
          image={featured3}
        />
      </div>
    </div>
  );
};

export default FeaturedProduct;
