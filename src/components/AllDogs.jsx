import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDogs } from "../api";

import "./style.css";
import SingleDog from "./SingleDog";

export default function AllDogs() {
  const navigate = useNavigate();

  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    async function getDogs() {
      const dogList = await fetchDogs();
      setDogs(dogList);
    }
    getDogs();
  }, []);

  return dogs.map((dog) => {
    return (
      <div
        className="puppy-card listed pointer"
        key={dog.id}
        onClick={() => {
          navigate(`/${dog.id}`);
        }}
      >
        <h2>{dog.name}</h2>
        <p>
          Team <span className="bold">#{dog.teamId}</span> - Player is <span className="bold">on the {dog.status}.</span>
        </p>
        <img src={dog.imageUrl} alt="Puppy Image" className="puppy-image" />
      </div>
    );
  });
}
