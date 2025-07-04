const rateLimit = require("express-rate-limit");

// Rate limiter: max 100 requests per 15 minutes per IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: {
    status: 429,
    error: "Too many requests, please try again later."
  },
  standardHeaders: true, // Return rate limit info in headers
  legacyHeaders: false
});

module.exports = limiter;
