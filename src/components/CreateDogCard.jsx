import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchDogs } from "../api";

import "./style.css";

export default function CreateDogCard() {
  const navigate = useNavigate();

  return (
    <div
      className="puppy-card plus pointer"
      onClick={() => {
        navigate(`/form`);
      }}
    >
      <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ficon-library.com%2Fimages%2Fwhite-plus-icon%2Fwhite-plus-icon-3.jpg&f=1&nofb=1&ipt=1a55a4dc990c4d004e2d15ee141f98119f820b7581151491028a874caca0b8eb&ipo=images" alt="Add New" className="icon" />
    </div>
  );
}
