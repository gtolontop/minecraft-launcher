import React from 'react';

export default function LogConsole({ logs }: { logs: string[] }) {
  return (
    <pre className="log-console">
      {logs.join('\n')}
    </pre>
  );
}
