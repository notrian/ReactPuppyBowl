import React from "react";

import "./style.css";
import AllDogs from "./AllDogs";
import CreateDogCard from "./CreateDogCard";

export default function PlayerList() {
  return (
    <div className="puppy-cards">
      <AllDogs />
      <CreateDogCard />
    </div>
  );
}
