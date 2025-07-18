import React from 'react';
import VideoBackground from './components/VideoBackground';
import PlayButton from './components/PlayButton';

export default function App() {
  return (
    <div className="app-container">
      <VideoBackground />
      <div className="overlay">
        <PlayButton />
      </div>
    </div>
  );
}
