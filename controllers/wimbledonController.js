const data = require("../data/wimbledonFinals.json");

const getWimbledonFinal = (req, res) => {
  const year = req.query.year;
  const result = data[year];

  if (!result) {
    return res.status(404).json({ error: `No data for year ${year}` });
  }

  return res.json({
    year: parseInt(year),
    ...result,
  });
};

module.exports = { getWimbledonFinal };
