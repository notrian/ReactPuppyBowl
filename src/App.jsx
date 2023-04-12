import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import SingleDog from "./components/SingleDog";
import CreateDogForm from "./components/CreateDogForm";
import PlayerList from "./components/PlayerList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PlayerList />} />
        <Route path="/:dogId" element={<SingleDog />} />
        <Route path="/form" element={<CreateDogForm />} />
      </Routes>
    </div>
  );
}

export default App;
