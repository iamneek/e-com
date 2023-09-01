import React from "react";
import "./Footer.scss";
import Logo from "./assets/logo.png";
import { Link } from "react-router-dom";
import mastercard from "./assets/mastercard.svg";
import visa from "./assets/visa.svg";
import paypal from "./assets/paypal.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_container">
        <div className="footer__container">
          <div className="logo__and__desc__footer">
            <div className="logo_div div_logo">
              <img src={Logo} alt="Switch" className="logo" /> Switch
            </div>
            <p className="footer_logo_desc">
              Specializes in providing high-quality, stylish products for your
              wardrobe
            </p>
          </div>
          <div className="footer__detail__Links">
            <div className="shop_footer">
              <h4>SHOP</h4>
              <div className="shop_footer_content footer_content">
                <Link className="links_footer">All Collections</Link>
                <Link className="links_footer">Winter Edition</Link>
                <Link className="links_footer">Discount</Link>
              </div>
            </div>
            <div className="company_footer">
              <h4>COMPANY</h4>
              <div className="company_footer_content footer_content">
                <Link className="links_footer">About Us</Link>
                <Link className="links_footer">Contact</Link>
                <Link className="links_footer">Affiliates</Link>
              </div>
            </div>
            <div className="support_footer">
              <h4>SUPPORT</h4>
              <div className="support_footer_content footer_content">
                <Link className="links_footer">FAQs</Link>
                <Link className="links_footer">Cookie Policy</Link>
                <Link className="links_footer">Terms of Use</Link>
              </div>
            </div>
            <div className="payment_footer">
              <h4>PAYMENT METHODS</h4>
              <div className="payment_footer_content footer_content">
                <Link className="links_footer">
                  <img src={mastercard} />
                </Link>

                <Link className="links_footer">
                  <img src={visa} />
                </Link>

                <Link className="links_footer">
                  <img src={paypal} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="copyrightandhr">
          <div className="hrtag">
            <hr className="footerhr" color="#b8c3d1" height={"0.05em"} />
          </div>
          <p>Copyright &copy;2023 Switch. All right reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
