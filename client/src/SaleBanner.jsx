import React from "react";
import { Link } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
const SaleBanner = () => {
  return (
    <div className="salebanner">
      <span className="salesbannernotice">
        Sign up and <strong>GET 20% OFF</strong> on your first order.
        <Link>Sign up now</Link>
      </span>
      <RxCross2 color="white" size={20} className="banner_cross" />
    </div>
  );
};

export default SaleBanner;
