//Section displaying the petfinder API of Border Collies
import Collie1 from "../assets/Collie1.png";
import Collie2 from "../assets/Collie2.png";
import Collie3 from "../assets/Collie3.png";
import { Link } from "react-router-dom";

const Adopt = () => {
  return (
    <section id="Adopt" className="bg-color1 rounded-s-[100px] xl:ml-20 mb-40">
      <h1 className="text-center py-6 font-bold text-2xl lg:text-3xl xl:text-5xl">
        Your new <span>best friend</span> is waiting...
      </h1>
      <div className="pl-16 lg:text-center">
        <h2 className="text-xl xl:text2-xl pb-4">ADOPT A PET</h2>
        <p className="pb-12 md:text-lg xl:text-xl">
          Discover the joy, comfort, and friendship of welcoming a loving pet
          into your home, your heart, and your life.
        </p>
      </div>
      <div className="flex max-xl:flex-col justify-evenly  items-center">
        <div className="mb-20 rounded-[50px] relative flex  max-w-xl justify-center items-center">
          <img
            src={Collie2}
            className="w-[500px]  max-w-[90vw] rounded-[50px]"
            alt=""
          />
          <Link to='/pets' className="bg-color2 cursor-pointer hover:bg-color4 text  text-4xl max-w-xl font-bold flex items-center justify-center h-20 rounded-b-[50px] absolute bottom-[-30px] w-full">
  
              <button className="text-light">See our Collies</button>
            
          </Link>
        </div>
        <div className="mb-20 rounded-[50px] relative  flex max-w-xl justify-center items-center">
          <img
            src={Collie3}
            className="w-[500px] max-w-[90vw] rounded-[50px]"
            alt=""
          />
          <Link to='/pets' className="bg-color2  cursor-pointer hover:bg-color4 text-4xl max-w-xl font-bold flex items-center justify-center h-20 rounded-b-[50px] absolute bottom-[-30px] w-full">
            <button className="text-light">See our Collies</button>
          </Link>
        </div>
      </div>

      <div className="md:text-center flex justify-around max-sm:flex-col max-sm:text-center md:flex-col items-center pb-16">
        <div>
          <h1 className="pb-4 md:text-3xl xl:text-4xl text-xl ">
            Ready to give a pet a <span>happy home?</span>
          </h1>
          <p className="text-lg md:text-2xl xl:text-3xl pb-6">
            FILL OUT AN ADOPTION FORM!
          </p>
        </div>
        <div className="">
          <button
            className="bg-color2 hover:bg-color4 text-light rounded-full px-12 py-4 font-bold text-lg
          md:text-2xl xl:text-3xl md:w-72 xl:w-96 cursor-not-allowed"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Adopt;
