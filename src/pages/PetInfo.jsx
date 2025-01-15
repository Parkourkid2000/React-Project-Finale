import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import imgSource from "../constants";

const PetInfo = () => {
  const { id } = useParams();
  const [dog, setDog] = useState({});

  async function fetchDog() {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    console.log(data);
    setDog(data);
  }

  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <>
    <section>
        <Link
          to="/pets"
          className="text-color4 hover:text-color2 underline font-semibold text-xl block mb-8 mt-4 ml-4 "
        >
          {" "}
          Go Back{" "}
        </Link>
        <div className="mt-4 mb-8 mx-8 flex flex-col items-center">
          {/* <h1>Pet Information:</h1> */}
          <h1 className="text-3xl font-bold pb-4 text-center"> {dog.name}</h1>
          <figure className="max-w-[90%] ">
            <img
              src={imgSource[`${id}` - 1]}
              alt=""
              className="w-[1000px]"
            />
          <br />
          <div className="font-semibold xl:text-lg">
          <h1 className="text-2xl">Shelter Info:</h1>
            <h1>Phone Number: {dog.phone?.slice(0, 14).split("x").join("")}</h1>
            <h1>Email: {dog.email}:</h1>
            <h1>Website: {dog.website}</h1>
          </div>
          </figure>
        </div>
  
    </section>
    </>
  );
};

export default PetInfo;
