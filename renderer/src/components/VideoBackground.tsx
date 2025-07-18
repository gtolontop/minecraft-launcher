import React from 'react';

export default function VideoBackground() {
  return (
    <video autoPlay loop muted className="background-video">
      <source src="../../assets/background.mp4" type="video/mp4" />
    </video>
  );
}
