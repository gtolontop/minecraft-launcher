import React from 'react';

export const ProgressView: React.FC<{ progress: number }> = ({ progress }) => (
  <div className="progress-view">
    <progress value={progress} max={100}></progress>
    <span>{progress}%</span>
  </div>
);
