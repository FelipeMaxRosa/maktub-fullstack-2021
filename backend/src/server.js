const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
const app = express();

// Routes
const characterRoutes = require("./routes/api/character");

// BodyParser and Cors Middleware
app.use(cors());
app.use(express.json());

const {PORT} = process.env || 8081;

app.get("/", (req, res) => {
  res.send({
    message: "Welcome to Maktub API, access /api/character to more details",
  });
});

// Use Routes
app.use("/api/character", characterRoutes);

// Listen Port
app.listen(PORT, () => {
  console.log(`Server run at port ${PORT}`);
});