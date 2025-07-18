import React from 'react';

export const VideoBackground: React.FC = () => (
  <video autoPlay loop muted className="background-video">
    <source src="background.mp4" type="video/mp4" />
  </video>
);
