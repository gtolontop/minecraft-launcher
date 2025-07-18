import React, { useEffect, useState } from 'react';
import { useLauncherAPI } from '../hooks/useLauncherAPI';

export const VersionSelector: React.FC = () => {
  const { getVersions } = useLauncherAPI();
  const [versions, setVersions] = useState<string[]>([]);

  useEffect(() => {
    getVersions().then(setVersions);
  }, [getVersions]);

  return (
    <select>
      {versions.map(v => (
        <option key={v}>{v}</option>
      ))}
    </select>
  );
};
