

// eslint-disable-next-line react/prop-types
const Dog = ({ name, email, address, img }) => {

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
            <span className="text-color1 text-lg">Shelter Location: </span>
             {''}{address}
          </p>
          <p>
            <span className="text-color1 text-lg">Shelter Email: </span>
            {email}
          </p>
        </div>
        <figure  className="">
        <img src={img} alt={`${name}`} className="w-24 h-24 object-cover" />
         
          </figure>
      </div>
    </>
  );
};

export default Dog;
