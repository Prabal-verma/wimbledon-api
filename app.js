const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const wimbledonRouter = require("./routes/wimbledon");
const rateLimiter = require("./middlewares/rateLimiter");

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// 🔐 Apply rate limiter globally
app.use(rateLimiter);

app.use("/wimbledon", wimbledonRouter);

// 404 fallback
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

module.exports = app;
