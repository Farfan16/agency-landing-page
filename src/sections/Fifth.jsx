import "./_style.css";
import mobileMilk from "../assets/images/mobile/image-gallery-milkbottles.jpg";
import mobileOrange from "../assets/images/mobile/image-gallery-orange.jpg";
import mobileCone from "../assets/images/mobile/image-gallery-cone.jpg";
import mobileSugar from "../assets/images/mobile/image-gallery-sugar-cubes.jpg";
import desktopMilk from "../assets/images/desktop/image-gallery-milkbottles.jpg";
import desktopOrange from "../assets/images/desktop/image-gallery-orange.jpg";
import desktopCone from "../assets/images/desktop/image-gallery-cone.jpg";
import desktopSugar from "../assets/images/desktop/image-gallery-sugarcubes.jpg";

const Fifth = () => {
  return (
    <section className="fifth">
      <div className="row">
        <img
          src={mobileMilk}
          className="w-1/2 h-1/2 md:hidden"
          alt="Picture of milk bottles"
        />
        <img
          src={desktopMilk}
          className="w-1/2 h-1/2 hidden md:block"
          alt="Picture of milk bottles"
        />
        <img
          src={mobileOrange}
          className="w-1/2 h-1/2 md:hidden"
          alt="Picture of orange"
        />
        <img
          src={desktopOrange}
          className="w-1/2 h-1/2 hidden md:block"
          alt="Picture of orange"
        />
      </div>
      <div className="row">
        <img
          src={mobileCone}
          className="w-1/2 h-1/2 md:hidden"
          alt="Picture of cone"
        />
        <img
          src={desktopCone}
          className="w-1/2 h-1/2 hidden md:block"
          alt="Picture of cone"
        />
        <img
          src={mobileSugar}
          className="w-1/2 h-1/2 md:hidden"
          alt="Picture of sugar cubes"
        />
        <img
          src={desktopSugar}
          className="w-1/2 h-1/2 hidden md:block"
          alt="Picture of sugar cubes"
        />
      </div>
    </section>
  );
};

export default Fifth;
