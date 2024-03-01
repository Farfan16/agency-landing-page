import React from "react";
import arrow from "../assets/images/icon-arrow-down.svg";
import "./_style.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="title">
        <h1>We Are Creatives</h1>
      </div>
      <div className="arrow">
        <img src={arrow} alt="down arrow icon" />
      </div>
    </section>
  );
};

export default Hero;
