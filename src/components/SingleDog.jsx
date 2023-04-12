import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchDog } from "../api";

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

  return <div>{dog.name}</div>;
}
