import React from 'react';
import { useLauncherAPI } from '../hooks/useLauncherAPI';

export const PlayButton: React.FC = () => {
  const { launch } = useLauncherAPI();
  const handleClick = () => launch({});
  return (
    <button className="play-button" onClick={handleClick}>
      Jouer
    </button>
  );
};
