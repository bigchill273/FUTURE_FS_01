const express = require("express");
const {
  getPublishedPostBySlug,
  getPublishedPosts,
} = require("../services/blogQueries");

const router = express.Router();

router.get("/", async (req, res) => {
  const requestedLimit = Number(req.query.limit);
  const limit =
    Number.isInteger(requestedLimit) && requestedLimit > 0
      ? Math.min(requestedLimit, 100)
      : undefined;

  res.json(await getPublishedPosts(limit));
});

router.get("/:slug", async (req, res) => {
  const post = await getPublishedPostBySlug(req.params.slug);

  if (!post) {
    return res.status(404).json({ message: "Article not found." });
  }

  return res.json(post);
});

module.exports = router;
