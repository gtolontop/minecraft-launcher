import React, { useState } from 'react';

export default function SettingsPanel() {
  const [ram, setRam] = useState(2);
  const save = () => {
    console.log('Save settings', ram);
  };
  return (
    <div className="settings-panel">
      <label>RAM (GB)</label>
      <input type="number" min="1" max="16" value={ram} onChange={e => setRam(parseInt(e.target.value))} />
      <button onClick={save}>Save</button>
    </div>
  );
}
