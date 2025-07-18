import React from 'react';

export default function VersionSelector() {
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    window.api.downloadVersion(e.target.value);
  };

  return (
    <select onChange={handleSelect} className="version-selector">
      <option value="latest">Latest</option>
      <option value="1.20">1.20</option>
    </select>
  );
}
