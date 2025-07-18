import { useCallback } from 'react';

declare global {
  interface Window {
    api: {
      launch: (opts: any) => Promise<any>;
      getVersions: () => Promise<string[]>;
    };
  }
}

export function useLauncherAPI() {
  const launch = useCallback((opts: any) => window.api.launch(opts), []);
  const getVersions = useCallback(() => window.api.getVersions(), []);
  return { launch, getVersions };
}
