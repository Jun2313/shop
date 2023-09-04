import React from 'react';
import Bg from "../../img/bg.png";

function MainBackground() {
  return (
    <div className="main-bg" style={{ backgroundImage: "url(" + Bg + ")" }}></div>
  );
}

export default MainBackground;