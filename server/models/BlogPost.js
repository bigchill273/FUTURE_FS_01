const mongoose = require("mongoose");

const blogPostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, maxlength: 180 },
    slug: { type: String, required: true, trim: true, lowercase: true },
    excerpt: { type: String, required: true, trim: true, maxlength: 500 },
    content: { type: String, required: true },
    coverImage: { type: String, trim: true, default: "" },
    category: { type: String, required: true, trim: true },
    tags: { type: [String], default: [] },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
      index: true,
    },
    featured: { type: Boolean, default: false },
    readingTime: { type: Number, min: 1 },
    publishedAt: { type: Date, default: null },
  },
  { timestamps: true },
);

blogPostSchema.index({ slug: 1 }, { unique: true });
blogPostSchema.index({ status: 1, publishedAt: -1 });

module.exports =
  mongoose.models.BlogPost || mongoose.model("BlogPost", blogPostSchema);
