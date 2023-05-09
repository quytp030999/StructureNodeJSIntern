const express = require("express");
const route = express.Router();
const {
  CreateNewBlog,
  DeleteBlog,
  FindBlogs,
  GetBlogs,
  UpdateInfoBlog,
} = require("../controllers/blog.controller");

route.get("/blog/all", GetBlogs);

route.post("/blog/create", CreateNewBlog);

route.post("/blog/update", UpdateInfoBlog);

route.post("/blog/delete", DeleteBlog);

route.get("/blog/find", FindBlogs);

module.exports = route;
