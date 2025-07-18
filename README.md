# Minecraft Launcher

This project is a sample Electron based launcher for Minecraft with a React powered UI.
It demonstrates how to structure an application with Electron, IPC communication,
and a simple React front‑end. The repository is intended to serve as a template
for a more advanced launcher.

## Prerequisites
- Node.js >= 18
- npm

## Installation
```bash
# Clone the repository
git clone <repo-url>
cd minecraft-launcher

# Install dependencies
npm install
```

## Development
```bash
# Start Electron with hot reload
npm run dev
```

npm run dist
```

## Testing & Linting
```bash
npm test
npm run lint
```

For design details see [design.md](design.md). For contribution guidelines
see [CONTRIBUTING.md](CONTRIBUTING.md).

## Build & Packaging
```bash
# Compile TypeScript
npm run build

# Create platform installers
npm run dist
```
Packaging outputs NSIS for Windows, DMG for macOS and AppImage for Linux.

## Testing & Linting
```bash
npm test
npm run lint
```

For design details see [design.md](design.md). For contribution guidelines
see [CONTRIBUTING.md](CONTRIBUTING.md).
