// src/components/SoundControl.jsx
import React, { useEffect, useRef, useState } from "react";

export default function SoundControl({ sound, label }) {
  const audioRef = useRef(new Audio(sound));
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);

  useEffect(() => {
    audioRef.current.loop = true;
    audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    playing ? audioRef.current.play() : audioRef.current.pause();
  }, [playing]);

  const togglePlay = () => setPlaying(!playing);

  return (
    <div className="sound-control">
      <button onClick={togglePlay}>
        {playing ? "⏸️ Pause" : "▶️ Play"}
      </button>
      <label>{label}</label>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={(e) => setVolume(parseFloat(e.target.value))}
      />
    </div>
  );
}
