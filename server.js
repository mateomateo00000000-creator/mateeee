import express from "express";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const app = express();
const PORT = 3000;

// Fix __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Serve static files (like index.html, CSS, JS) from "public"
app.use(express.static(join(__dirname, "public")));

// Default route
app.get("/", (req, res) => {
  res.sendFile(join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
