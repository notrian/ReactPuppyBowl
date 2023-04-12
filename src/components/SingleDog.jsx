import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchDog } from "../api";

import "./style.css";

export default function SingleDog() {
  const { dogId } = useParams();

  const [dog, setDog] = useState([]);

  useEffect(() => {
    async function getDog() {
      const dog = await fetchDog(dogId);
      setDog(dog);
    }
    getDog();
  }, []);

  return (
    <div className="puppy-card">
      <h1>{dog.name}</h1>
      <h3>
        Team <span className="bold">#{dog.teamId}.</span>
      </h3>
      <h3>
        Player is <span className="bold">on the {dog.status}.</span>
      </h3>
      <h3>{dog.breed}</h3>
      <img src={dog.imageUrl} alt="Puppy Image" className="puppy-image" />
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </div>
  );
}
