const Blogs = require("../models/blogs.model");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const GetAllBlogs = async () => {
  const blogs = Blogs.findAll({ raw: true });
  return blogs;
};

const GetBlogById = async (idBlog) => {
  const blog = await Blogs.findOne({
    where: { id: idBlog },
    raw: true,
  });
  return blog;
};

const GetBlogByTitle = async (title) => {
  const blog = await Blogs.findAll({
    where: {
      title: {
        [Op.like]: `%${title}%`,
      },
    },
    raw: true,
  });
  return blog;
};

const InsertBlog = async (blog) => {
  const newBlog = await Blogs.create(blog);
  return newBlog;
};

const UpdateBlog = async (idBlog, blogUpdate) => {
  await Blogs.update(blogUpdate, {
    where: { id: idBlog },
  });
  return;
};

const DeleteBlogById = async (idBlog) => {
  await Blogs.destroy({ where: { id: idBlog } });
  return;
};

module.exports = {
  GetAllBlogs,
  GetBlogById,
  GetBlogByTitle,
  InsertBlog,
  UpdateBlog,
  DeleteBlogById,
};
