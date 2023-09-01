import React from "react";
import "./SubscribeNewsletter.scss";
import { BiEnvelope } from "react-icons/bi";
import { Link } from "react-router-dom";
const SubscribeNewsletter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter_info">
        <h2>
          Subscribe to our newsletter to get updates of our latest collection
        </h2>
        <p>
          Get 20% off on your first order just by subscribing to our newsletter
        </p>
      </div>
      <div className="input__newsletter">
        <div className="subscribe__input__form">
          <BiEnvelope size={30} color="#9fa9b6" className="emailiconnews" />
          <input
            type="text"
            placeholder="Enter your email"
            className="email__input__newsletter"
          />
        </div>
        <button className="subscribe__btn btnn">Subscribe</button>
      </div>
      <p className="warn_news_landing">
        You will be able to unsubscribe at any time. Read our Privacy Policy{" "}
        <Link className="here_privacy_policy">here</Link>
      </p>
    </div>
  );
};

export default SubscribeNewsletter;
