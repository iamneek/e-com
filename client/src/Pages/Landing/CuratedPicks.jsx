import React from "react";
import "./CuratedPicks.scss";
import CurratedCards from "./CurratedCards";

const CuratedPicks = () => {
  return (
    <div className="CurratedPickss">
      <h1>Currated Picks</h1>
      <div className="cards_currated">
        <CurratedCards />
      </div>
    </div>
  );
};

export default CuratedPicks;
