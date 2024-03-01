import egg from "../assets/images/mobile/image-transform.jpg";
import "./_style.css";

const First = () => {
  return (
    <section className="first">
      <div className="egg">
        <img src={egg} alt="egg image" />
      </div>
      <div className="content">
        <h2>Transform your brand</h2>
        <p>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <div className="hyperlink">
          <a href="#">Learn More</a>
          <div className="underline" id="yellow" />
        </div>
      </div>
    </section>
  );
};

export default First;
