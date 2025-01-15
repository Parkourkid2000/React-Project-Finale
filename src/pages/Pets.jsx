import axios from "axios";
import { useEffect, useState } from "react";
import Dog from "../components/Dog";
import { Link } from "react-router-dom";
import Skeleton from "../components/Skeleton";


const Pets = () => {
  const [dogs, setDogs] = useState([]);

  async function FetchDogs() {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setDogs(data);
    console.log(data);
  }
  useEffect(() => {
    setTimeout(() => {
      FetchDogs();
    }, 2000);
  }, []);
  return (
    <section className="my-8">
      {dogs.length ? dogs.map((dog) => (
<Link to={`/petInfo/${dog.id}`} key={dog.id}>
  
          <Dog name={dog.name} email={dog.email} address={dog.address.city}  />
          
</Link>
      )) : <Skeleton /> }
    </section>
  );
};

export default Pets;
