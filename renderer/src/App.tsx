import React, { useState } from 'react';
import { VideoBackground } from './components/VideoBackground';
import { PlayButton } from './components/PlayButton';
import { VersionSelector } from './components/VersionSelector';
import { LoginForm } from './components/LoginForm';
import { ProgressView } from './components/ProgressView';
import { SettingsPanel } from './components/SettingsPanel';
import { LogConsole } from './components/LogConsole';
import './styles/App.scss';

export default function App() {
  const [progress, setProgress] = useState(0);
  const [logs, setLogs] = useState<string[]>([]);

  return (
    <div className="app-container">
      <VideoBackground />
      <div className="overlay">
        <div>
          <PlayButton />
          <VersionSelector />
          <LoginForm />
          <ProgressView progress={progress} />
          <SettingsPanel />
          <LogConsole logs={logs} />
        </div>
      </div>
    </div>
  );
}
