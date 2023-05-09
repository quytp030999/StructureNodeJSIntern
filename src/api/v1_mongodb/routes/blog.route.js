const express = require("express");
const route = express.Router();
const {
  CreateNewBlog,
  DeleteBlog,
  FindBlogs,
  GetBlogs,
  UpdateInfoBlog,
} = require("../controllers/blog.controller");

route.get("/all", GetBlogs);

route.post("/create", CreateNewBlog);

route.post("/update", UpdateInfoBlog);

route.post("/delete", DeleteBlog);

route.get("/find", FindBlogs);

module.exports = route;
