import Collie1 from "../assets/Collie1.png";
import Collie2 from "../assets/Collie2.png";
import Collie3 from "../assets/Collie3.png";
import Collie4 from "../assets/Collie4.png";
import Collie5 from "../assets/Collie5.png";
import Collie6 from "../assets/Collie6.png";
import Collie7 from "../assets/Collie7.png";
import Collie8 from "../assets/Collie8.png";
import Collie9 from "../assets/Collie9.png";
import Collie10 from "../assets/Collie10.png";

// eslint-disable-next-line react/prop-types
const Dog = ({ name, email, address }) => {
  const imgSource = [
    Collie1,
    Collie2,
    Collie3,
    Collie4,
    Collie5,
    Collie6,
    Collie7,
    Collie8,
    Collie9,
    Collie10,
  ];

  return (
    <>
      <div className="flex justify-between items-center px-6 mt-3 text-light bg-color2 hover:bg-color4 border-dark border-2 ">
        <div className=" ">
          <h1 className="uppercase text-xl underline font-semibold text-color1 ">
            Pet Details: Click for More
          </h1>
          <p>
            <span className="text-color1 text-lg">Dog Name:</span> {name}
          </p>
          <p>
            <span className="text-color1 text-lg">Shelter Location:</span>
            {address}
          </p>
          <p>
            <span className="text-color1 text-lg">Shelter Email:</span>
            {email}
          </p>
        </div>
        {/* <figure className="">
          {imgSource.map((img, index) => (
            <img key={index} src={img} alt="" width={100} />
          ))}
        </figure> */}
      </div>
    </>
  );
};

export default Dog;
