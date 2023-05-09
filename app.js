const express = require("express");
const app = express();
const routerBlogsSQL = require("./src/api/v1_mysql/routes/blog.route");
const routerIndexMongo = require("./src/api/v1_mongodb/routes/index.route");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/v1/mysql", routerBlogsSQL); // This is the router for Blogs using mysql
app.use("/v1/mongo", routerIndexMongo); // This is the router for Blogs using mongo

module.exports = app;
