import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDogs } from "../api";

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

  return (
    <div>
      {dogs.map((dog) => {
        return (
          <p
            key={dog.id}
            onClick={() => {
              navigate(`/${dog.id}`);
            }}
          >
            {dog.name}
          </p>
        );
      })}
    </div>
  );
}
