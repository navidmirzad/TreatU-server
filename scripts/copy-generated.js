const fs = require("fs");
const path = require("path");

const src = path.resolve(__dirname, "..", "generated");
const dest = path.resolve(__dirname, "..", "dist", "generated");

function copyRecursive(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) return;
  fs.mkdirSync(destDir, { recursive: true });
  const entries = fs.readdirSync(srcDir, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

try {
  copyRecursive(src, dest);
  console.log("Copied generated -> dist/generated");
} catch (err) {
  console.error("Failed to copy generated folder:", err);
  process.exit(1);
}
