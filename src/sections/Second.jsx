import cupMobile from "../assets/images/mobile/image-stand-out.jpg";
import cupDesktop from "../assets/images/desktop/image-stand-out.jpg";
import "./_style.css";

const Second = () => {
  return (
    <section className="second">
      <div className="cup md:hidden">
        <img src={cupMobile} alt="cup image" />
      </div>
      <div className="cup md:block hidden">
        <img src={cupDesktop} alt="cup image" />
      </div>
      <div className="content">
        <h2>Stand out to the right audience</h2>
        <p>
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we&apos;ll build and
          extend your brand in digital places.
        </p>
        <div className="hyperlink">
          <a href="#">Learn More</a>
          <div className="underline" id="red" />
        </div>
      </div>
    </section>
  );
};

export default Second;
