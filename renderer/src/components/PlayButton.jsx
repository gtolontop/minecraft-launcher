import React from 'react';

export default function PlayButton() {
  const handleClick = () => {
    window.api.launch({});
  };

  return (
    <button className="play-button" onClick={handleClick}>
      Jouer
    </button>
  );
}
