const express = require("express");
const router = express.Router();
const { getWimbledonFinal } = require("../controllers/wimbledonController");
const { validateYear } = require("../validators/queryValidator");

router.get("/", (req, res, next) => {
  const { error } = validateYear(req.query);
  if (error) return res.status(400).json({ error: error.details[0].message });

  next();
}, getWimbledonFinal);

module.exports = router;
