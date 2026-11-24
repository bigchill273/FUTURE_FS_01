require("dotenv").config();

const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const BlogPost = require("./models/BlogPost");
const blogRoutes = require("./routes/blogRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();
const port = Number(process.env.PORT) || 5000;
const clientOrigins = (process.env.CLIENT_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

if (clientOrigins.length === 0) {
  throw new Error("CLIENT_ORIGIN must include at least one allowed origin.");
}

app.use(
  cors({
    origin: clientOrigins,
  }),
);
app.use(express.json({ limit: "10kb" }));
app.use("/api/posts", blogRoutes);
app.use("/api/contact", contactRoutes);

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use((error, _req, res, _next) => {
  console.error("API request failed:", error);
  res.status(500).json({ message: "An unexpected server error occurred." });
});

async function start() {
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI is required to start the API server.");
  }

  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB.");

  const postCount = await BlogPost.countDocuments();
  if (postCount === 0) {
    const { mockBlogPosts } = await import("./data/mock-blog-posts.mjs");
    await BlogPost.insertMany(mockBlogPosts);
    console.log(`Seeded MongoDB with ${mockBlogPosts.length} mock blog posts.`);
  }

  app.listen(port, () => {
    console.log(`API server listening on port ${port}.`);
  });
}

start().catch((error) => {
  console.error("Unable to start API server:", error);
  process.exitCode = 1;
});

module.exports = app;
