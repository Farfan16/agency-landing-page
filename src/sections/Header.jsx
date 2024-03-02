import { useEffect, useState } from "react";
import sunnyside from "../assets/images/logo.svg";
import sunnysideAlt from "../assets/images/logo-green.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import hamburgerAlt from "../assets/images/icon-hamburger-green.svg";

const Header = () => {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(0);
  const handleScroll = () => {
    let position = window.scrollY;
    setScrolled(position);
  };

  // const handleActive = () => {

  // }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={scrolled <= 0 ? "header" : "header scrolled"}>
      <img src={scrolled <= 0 ? sunnyside : sunnysideAlt} alt="Logo" />
      <img
        src={scrolled <= 0 ? hamburger : hamburgerAlt}
        alt="hamburger"
        className={active ? "opacity-30 md:hidden" : "md:hidden"}
        onClick={() => setActive(!active)}
      />
      {active && (
        <div className="active-navigation pointy">
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <button>Contact</button>
        </div>
      )}
      <div className={scrolled <= 0 ? "navigation" : "navigation scrolled"}>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Projects</a>
        <button>Contact</button>
      </div>
    </header>
  );
};

export default Header;
