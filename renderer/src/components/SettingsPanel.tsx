import React from 'react';

export const SettingsPanel: React.FC = () => (
  <div className="settings-panel">
    <h2>Options</h2>
    {/* Placeholder content */}
    <label>
      RAM:
      <input type="number" min="1" max="16" defaultValue="4" /> GB
    </label>
  </div>
);
