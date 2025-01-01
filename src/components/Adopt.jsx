//Section displaying the petfinder API of Border Collies
import Collie1 from "../assets/Collie1.png";
import Collie2 from "../assets/Collie2.png";
import Collie3 from "../assets/Collie3.png";

const Adopt = () => {
  return (
    <section className="bg-color1 rounded-s-[100px] xl:ml-20 mb-40">
      <h1 className="text-center py-6 font-bold text-2xl lg:text-3xl xl:text-5xl">
        Your new <span>best friend</span> is waiting...
      </h1>
      <div className="pl-16 lg:text-center">
        <h2 className="text-xl pb-4">ADOPT A PET</h2>
        <p className="pb-12">
          Discover the joy, comfort, and friendship of welcoming a loving pet
          into your home, your heart, and your life.
        </p>
      </div>
      <div className="flex flex-col items-center">
      <div className="mb-20 rounded-[50px] relative flex  max-w-xl justify-center items-center">
          <img src={Collie1} className="w-[500px]  max-w-[90vw] rounded-[50px]" alt="" />
          <div className="bg-color2 text  text-4xl max-w-xl font-bold flex items-center justify-center h-20 rounded-b-[50px] absolute bottom-[-30px] w-full">
            <button className="text-light">See our Collies</button>
          </div>
        </div>
        <div className="mb-20 rounded-[50px] relative  flex max-w-xl justify-center items-center">
          <img src={Collie2} className="w-[500px] max-w-[90vw] rounded-[50px]" alt="" />
          <div className="bg-color2 text-4xl max-w-xl font-bold flex items-center justify-center h-20 rounded-b-[50px] absolute bottom-[-30px] w-full">
            <button className="text-light">See our Collies</button>
          </div>
        </div>
        
      </div>

      <div className="md:text-center flex justify-around max-sm:flex-col max-sm:text-center md:flex-col items-center pb-16">
        <div>
          <h1 className="pb-4 text-xl ">
            Ready to give a pet a <span>happy home?</span>
          </h1>
          <p className="text-lg pb-6">FILL OUT AN ADOPTION FORM!</p>
        </div>
        <div className="">
          <button className="bg-color2 text-light rounded-full px-12 py-4 font-bold text-lg
          ">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Adopt;
