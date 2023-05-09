const express = require("express");
const route = express.Router();

route.use("/blog", require("./blog.route"));

module.exports = route;
