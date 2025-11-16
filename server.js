const express = require("express");
const path = require("path");

const app = express();

// Use the port Azure gives you, or 3000 locally
const port = process.env.PORT || 3000;

// Serve everything inside /public as static files
app.use(express.static(path.join(__dirname, "public")));

// Simple health check endpoint (optional but nice for Azure)
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// For any other route, send back index.html (so /, /about, etc. work)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});