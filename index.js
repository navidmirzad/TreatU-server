#!/usr/bin/env node
// Bootstrap for hosts that run `node index.js` (e.g., Render)
// This will import the compiled app from `dist/app.js`.
import('./dist/app.js')
  .catch((err) => {
    console.error('Failed to start app:', err);
    process.exit(1);
  });
