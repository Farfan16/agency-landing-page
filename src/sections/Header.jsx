import React, { useEffect, useState } from "react";
import sunnyside from "../assets/images/logo.svg";
import sunnysideAlt from "../assets/images/logo-green.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import hamburgerAlt from "../assets/images/icon-hamburger-green.svg";

const Header = () => {
  let [scrolled, setScrolled] = useState(0);
  const handleScroll = () => {
    let position = window.scrollY;
    setScrolled(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className={scrolled <= 0 ? "header" : "header scrolled"}>
      <img src={scrolled <= 0 ? sunnyside : sunnysideAlt} alt="Logo" />
      <img src={scrolled <= 0 ? hamburger : hamburgerAlt} alt="hamburger" />
    </section>
  );
};

export default Header;
