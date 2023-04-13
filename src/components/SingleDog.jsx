import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { deleteDog, fetchDog } from "../api";

import "./style.css";

export default function SingleDog() {
  const navigate = useNavigate();

  const { dogId } = useParams();

  const [dog, setDog] = useState([]);

  useEffect(() => {
    async function getDog() {
      const dog = await fetchDog(dogId);
      setDog(dog);
    }
    getDog();
  }, []);

  async function handleEvent(e) {
    e.preventDefault();
    const resp = await deleteDog(dogId);
    if (resp) {
      navigate(`/`);
    }
  }

  return (
    <div className="puppy-card">
      <h1>{dog.name}</h1>
      <h3>{dog.breed}</h3>
      <h3>
        Team <span className="bold">#{dog.teamId}.</span>
      </h3>
      <h3>
        Player is <span className="bold">on the {dog.status}.</span>
      </h3>
      <a className="pointer" onClick={handleEvent}>
        Delete Dog
      </a>
      <img src={dog.imageUrl} alt="Puppy Image" className="puppy-image" />
      <nav>
        <Link to="/">{"<"} Back Home</Link>
      </nav>
    </div>
  );
}
