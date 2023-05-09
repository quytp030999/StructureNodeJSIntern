const { isString, isNumber } = require("../utils/validatation.util");

const validateBlogCreate = (blog) => {
  if (
    isString(blog.title) == true &&
    isString(blog.description) == true &&
    isString(blog.type) == true &&
    isString(blog.tag) == true
  ) {
    return true;
  }
  return false;
};

const validateBlogUpdate = (blog) => {
  if (
    blog.id &&
    isNumber(blog.id) == true &&
    isString(blog.title) == true &&
    isString(blog.description) == true &&
    isString(blog.type) == true &&
    isString(blog.tag) == true
  ) {
    return true;
  }
  return false;
};

module.exports = { validateBlogCreate, validateBlogUpdate };
