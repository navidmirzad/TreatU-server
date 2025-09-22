import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/health", (req, res) => {
  res.send("OK");
});

const PORT = process.env.BACKEND_PORT || 8080;
app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
