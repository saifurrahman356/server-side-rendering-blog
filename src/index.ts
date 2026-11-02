import express from "express";
import nunjucks from "nunjucks";
import { blogPosts } from "./data/blog.js";
import path from "node:path";
import { formattedDate, slugify } from "./data/types.js";

const app = express();

const viewsPath = path.resolve("views");

nunjucks.configure(viewsPath, {
  autoescape: true,
  express: app,
  watch: true,
});

app.use(express.static("public"));

app.get(["/", "/index"], (req, res) => {
  const formattedBlogPosts = blogPosts.map((post) => ({
    ...post,
    slug: slugify(post.title),
    formattedDate: formattedDate(post.createdAt),
  }));
  res.render("index.njk", { blogPosts: formattedBlogPosts });
});

app.get("/post/:slug", (req, res) => {
  const blogPost = blogPosts.find(
    (post) => slugify(post.title) === req.params.slug,
  );

  if (!blogPost) {
    return res.status(404).send("Post not found");
  }

  const formattedBlogPost = {
    ...blogPost,
    formattedDate: formattedDate(blogPost.createdAt),
  };

  res.render("post.njk", { blogPost: formattedBlogPost });
});

app.get("/contact", (req, res) => {
  res.render("contact.njk");
});

app.get("/about", (req, res) => {
  res.render("404.njk");
});

app.get("/post", (req, res) => {
  res.render("404.njk");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
