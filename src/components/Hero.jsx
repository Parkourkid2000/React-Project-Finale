import CagedCollie2 from "../assets/CagedCollie2.png";
import CagedCollie1 from "../assets/CagedCollie.png";
import Button from "./Button";

const Hero = () => {
  return (
    <section id="hero" className="relative">
      <div className="flex flex-1 items-center">
        <div className="flex flex-col w-full px-8">
          <h1 className="text-3xl font-bold text-color2">
            Help Border Collies in Need
          </h1>
          <p className="py-6 font-light">
            Give to homeless, abandoned, and injured Border Collies today. Your
            gift can <span className="font-extrabold">save a life.</span>
          </p>
          <Button text="Click Me" />
        </div>
        <div>
          <img src={CagedCollie2} alt="Caged Collie 2" />
        </div>
        <div className="">
          <img src="" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
