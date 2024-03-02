import "./_style.css";
import mobileMilk from "../assets/images/mobile/image-gallery-milkbottles.jpg";
import mobileOrange from "../assets/images/mobile/image-gallery-orange.jpg";
import mobileCone from "../assets/images/mobile/image-gallery-cone.jpg";
import mobileSugar from "../assets/images/mobile/image-gallery-sugar-cubes.jpg";

const Fifth = () => {
  return (
    <section className="fifth">
      <div className="row">
        <img
          src={mobileMilk}
          className="w-1/2 h-1/2"
          alt="Picture of milk bottles"
        />
        <img
          src={mobileOrange}
          className="w-1/2 h-1/2"
          alt="Picture of orange"
        />
      </div>
      <div className="row">
        <img src={mobileCone} className="w-1/2 h-1/2" alt="Picture of cone" />
        <img
          src={mobileSugar}
          className="w-1/2 h-1/2"
          alt="Picture of sugar cubes"
        />
      </div>
    </section>
  );
};

export default Fifth;
