import { BsArrowRight } from "react-icons/bs";
import { TfiAngleRight, TfiAngleLeft } from "react-icons/tfi";
import Summerr from "./assets/summerr.jpeg";
import "./HomeSlider.scss";

const HomeSlider = () => {
  return (
    <div className="sliderDiv">
      <div key={1} className="banner_banner">
        <h1 className="banner_text">
          Level up your style with our <br /> summer collections
        </h1>
        <div className="backdrop"></div>
        <button className="shop_now_banner">
          Shop now
          <BsArrowRight />
        </button>
        <img src={Summerr} alt="" />
      </div>
      <div className="bubbles">
        <div className="bubble bubble1 bubble_selected"></div>
        <div className="bubble bubble2"></div>
        <div className="bubble bubble3"></div>
        <div className="bubble bubble4"></div>
        <div className="bubble bubble5"></div>
      </div>
      <div className="next_prev_banner">
        <button className="prev_btn btnn">
          <TfiAngleLeft size={15} className="prev_icon" />
        </button>
        <button className="next_btn btnn">
          <TfiAngleRight size={15} />
        </button>
      </div>
    </div>
  );
};

export default HomeSlider;
