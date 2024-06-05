// src/App.jsx
import React from "react";
import SoundControl from "./components/SoundControl";
import "./App.css";

const sounds = [
  { id: 1, label: "Rain", url: "/sounds/rain.mp3" },
  { id: 2, label: "Birds", url: "/sounds/birds.mp3" },
  { id: 3, label: "Coffee Shop", url: "/sounds/coffee-shop.mp3" },
  { id: 4, label: "Fireplace", url: "/sounds/fireplace.mp3" },
];

function App() {
  return (
    <div className="App">
      <h1>Soundscapes — Mix Ambient Sounds</h1>
      {sounds.map((sound) => (
        <SoundControl key={sound.id} label={sound.label} sound={sound.url} />
      ))}
    </div>
  );
}

export default App;
