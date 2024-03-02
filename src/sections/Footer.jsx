import React from "react";
import facebookIcon from "../assets/images/icon-facebook.svg";
import instagramIcon from "../assets/images/icon-instagram.svg";
import twitterIcon from "../assets/images/icon-twitter.svg";
import pinterestIcon from "../assets/images/icon-pinterest.svg";
import sunnyside from "../assets/images/logo-green.svg";

const Footer = () => {
  return (
    <section className="footer">
      <img src={sunnyside} className="logo" alt="logo" />
      <div className="links">
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Projects</a>
      </div>
      <div className="socials">
        <a href="facebook.com">
          <img src={facebookIcon} alt="Facebook icon" />
        </a>
        <a href="instagram.com">
          <img src={instagramIcon} alt="Instagram icon" />
        </a>
        <a href="twitter.com">
          <img src={twitterIcon} alt="Twitter icon" />
        </a>
        <a href="pinterest.com">
          <img src={pinterestIcon} alt="Pinterest icon" />
        </a>
      </div>
    </section>
  );
};

export default Footer;
