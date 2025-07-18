import React from 'react';

export default function ProgressView({ progress }: { progress: number }) {
  return (
    <div className="progress-view">
      <progress value={progress} max="100" />
      <span>{progress}%</span>
    </div>
  );
}
