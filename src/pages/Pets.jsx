import axios from "axios";
import { useEffect, useState } from "react";
import Dog from "../components/Dog";
import { Link } from "react-router-dom";


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
    }, 500);
  }, []);
  return (
    <div>
      {dogs.length ? dogs.map((dog) => (
<Link to={`/petInfo/${dog.id}`} key={dog.id}>
  
          <Dog  id={dog.id} name={dog.name} email={dog.email} username={dog.username}  />
          
</Link>
      )) : <h1>Loading...</h1> }
    </div>
  );
};

export default Pets;
