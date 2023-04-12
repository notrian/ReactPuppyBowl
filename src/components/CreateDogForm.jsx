import React, { useState } from "react";

export default function CreateDogForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <h2>Create a new Doggo!</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="name">Name:</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <label htmlFor="email">Email:</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <button>Submit</button>
      </form>
    </div>
  );
}
