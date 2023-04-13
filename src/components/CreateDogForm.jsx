import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./style.css";
import { postDog } from "../api";

export default function CreateDogForm() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [team, setTeam] = useState("");
  const [state, setState] = useState("");
  const [imgurl, setImgurl] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const resp = await postDog(name, breed, state, imgurl, team);
    navigate(`/${resp.id}`);
  }

  return (
    <div className="center">
      <h2>Create a new Doggo!</h2>
      <form className="dog-form" onSubmit={handleSubmit}>
        <span className="spacer"></span>
        <label htmlFor="name">Name:</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <span className="spacer"></span>
        <label htmlFor="breed">Breed:</label>
        <input type="text" onChange={(e) => setBreed(e.target.value)} />
        <span className="spacer"></span>
        <label htmlFor="team">Team #:</label>
        <input type="number" min="1" onChange={(e) => setTeam(e.target.value)} />
        <span className="spacer"></span>
        <label htmlFor="status">Player Status:</label>
        <select name="status" defaultValue="d" onChange={(e) => setState(e.target.value)}>
          <option disabled value="d">
            Select an option
          </option>
          <option value="bench">Player is on the bench</option>
          <option value="field">Player is on the field</option>
        </select>
        <span className="spacer"></span>
        <label htmlFor="imgurl">Image URL:</label>
        <input type="text" onChange={(e) => setImgurl(e.target.value)} />
        <span className="spacer"></span>
        <button>Add Player</button>
      </form>
      <nav>
        <Link to="/">{"<"} Back Home</Link>
      </nav>
    </div>
  );
}
