import React from 'react';
import PlayButton from './components/PlayButton.jsx';

export default function App() {
  return (
    <div className="app-container">
      <video autoPlay loop muted className="background-video">
        <source src="background.mp4" type="video/mp4" />
      </video>
      <div className="overlay">
        <PlayButton />
      </div>
    </div>
  );
}
