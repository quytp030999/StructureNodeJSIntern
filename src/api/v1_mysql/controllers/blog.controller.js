const {
  InsertBlog,
  DeleteBlogById,
  GetAllBlogs,
  GetBlogById,
  GetBlogByTitle,
  UpdateBlog,
} = require("../services/blogs.service");
const {
  validateBlogCreate,
  validateBlogUpdate,
} = require("../validations/blog.validation");
const { isNumber, isString } = require("../utils/validatation.util");

const GetBlogs = async (req, res, next) => {
  try {
    const blogs = await GetAllBlogs();
    res.json({
      status: "OK",
      elements: blogs,
    });
  } catch (error) {
    console.log("error:::", error.toString());
    res.json({
      status: "Error",
      elements: [],
    });
  }
};

const CreateNewBlog = async (req, res, next) => {
  try {
    const blog = req.body;
    if (validateBlogCreate(blog) == false) {
      res.json({
        status: "Error",
        elements: {},
      });
    }

    const newBlog = await InsertBlog(blog);
    res.json({
      status: "OK",
      elements: newBlog,
    });
  } catch (error) {
    console.log("error:::", error);
    res.json({
      status: "Error",
      elements: {},
    });
  }
};

const UpdateInfoBlog = async (req, res, next) => {
  try {
    const { id, title, description, type, tag } = req.body;
    if (validateBlogUpdate({ id, title, description, type, tag }) == false) {
      res.json({
        status: "Error",
        elements: {},
      });
    }

    const blogById = await GetBlogById(id);
    if (!blogById) {
      res.json({
        status: "Error",
        elements: {},
      });
    }

    await UpdateBlog(id, { title, description, type, tag });
    res.json({
      status: "OK",
      elements: { id, title, description, type, tag },
    });
  } catch (error) {
    console.log("error:::", error);
    res.json({
      status: "Error",
      elements: {},
    });
  }
};

const FindBlogs = async (req, res, next) => {
  try {
    const { title } = req.query;
    if (isString(title) == false) {
      res.json({
        status: "Error",
        elements: [],
      });
    }

    const blogs = await GetBlogByTitle(title);
    res.json({
      status: "OK",
      elements: blogs,
    });
  } catch (error) {
    console.log("error:::", error);
    res.json({
      status: "Error",
      elements: [],
    });
  }
};

const DeleteBlog = async (req, res, next) => {
  try {
    const { id } = req.body;
    if (isNumber(id) == false) {
      res.json({
        status: "Error",
      });
    }

    await DeleteBlogById(id);
    res.json({
      status: "OK",
    });
  } catch (error) {
    console.log("error:::", error);
    res.json({
      status: "Error",
    });
  }
};

module.exports = {
  GetBlogs,
  CreateNewBlog,
  UpdateInfoBlog,
  FindBlogs,
  DeleteBlog,
};
