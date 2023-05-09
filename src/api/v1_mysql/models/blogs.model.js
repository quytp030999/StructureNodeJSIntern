const Sequelize = require("sequelize");
const { nodejsbasic } = require("../helpers/connect.multi.mysql");

var Blogs = nodejsbasic.define(
  "blogs",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "",
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "",
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "",
    },
    tag: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "",
    },
  },
  {
    timestamps: false,
    underscored: false,
  }
);
module.exports = Blogs;
