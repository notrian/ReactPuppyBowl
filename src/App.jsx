import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import AllDogs from "./components/AllDogs";
import SingleDog from "./components/SingleDog";
import CreateDogForm from "./components/CreateDogForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<AllDogs />} />
        <Route path="/:dogId" element={<SingleDog />} />
        <Route path="/form" element={<CreateDogForm />} />
      </Routes>
    </div>
  );
}

export default App;
