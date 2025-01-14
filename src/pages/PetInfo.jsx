import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
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


const PetInfo = () => {
  const { id } = useParams();
  const [dog, setDog] = useState({});
  const imgSource = [Collie1, Collie2, Collie3, Collie4, 
    Collie5, Collie6, Collie7, Collie8,Collie9, Collie10]

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
    <div>
      <Link to='/pets' className="text-color4"> Go Back </Link>
      <h1>Pet Information:</h1>
      <h1>Name: {dog.name}</h1>
      <figure>
        <img src={imgSource[`${id}` -1]} alt="" />
      </figure>
      <br />
      <h1>Shelter Info:</h1>
      <div>
        <h1>Phone Number: {dog.phone?.slice(0,14).split('x').join('')}</h1>
        <h1>Email: {dog.email}:</h1>
        <h1>Website: {dog.website}</h1>
      </div>
    </div>
  );
};

export default PetInfo;
