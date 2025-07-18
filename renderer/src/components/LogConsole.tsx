import React from 'react';

export const LogConsole: React.FC<{ logs: string[] }> = ({ logs }) => (
  <pre className="log-console">
    {logs.join('\n')}
  </pre>
);
