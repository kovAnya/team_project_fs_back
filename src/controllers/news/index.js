const { New } = require("../../schemas/news");

async function news(req, res, next) {
  try {
    const query = req.query.search;

    if (query) {
      const searchResult = await New.find({
        title: { $regex: query, $options: "i" },
      });
      return res.status(200).json(searchResult);
    }

    const result = await New.find({});
    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  news,
};
