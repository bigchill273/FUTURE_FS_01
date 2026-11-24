const BlogPost = require("../models/BlogPost");

const publishedFilter = {
  status: "published",
  publishedAt: { $lte: new Date() },
};

async function getPublishedPosts(limit) {
  let query = BlogPost.find(publishedFilter)
    .sort({ publishedAt: -1 })
    .select("-content")
    .lean();

  if (limit) {
    query = query.limit(limit);
  }
  

  return query;
}

async function getPublishedPostBySlug(slug) {
  return BlogPost.findOne({ ...publishedFilter, slug }).lean();
}

module.exports = { getPublishedPostBySlug, getPublishedPosts };
