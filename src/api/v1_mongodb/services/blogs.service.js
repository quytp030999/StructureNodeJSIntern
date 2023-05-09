const Blogs = require("../models/blogs.model");

const GetAllBlogs = async () => {
  const blogs = Blogs.find();
  return blogs;
};

const GetBlogById = async (idBlog) => {
  const blog = await Blogs.findOne({
    id: idBlog,
  });
  return blog;
};

const GetBlogByTitle = async (title) => {
  const blog = await Blogs.find({
    title: new RegExp(title),
  });
  return blog;
};

const InsertBlog = async (blog) => {
  const newBlog = await Blogs.create(blog);
  return newBlog;
};

const UpdateBlog = async (idBlog, blogUpdate) => {
  await Blogs.updateOne({ _id: idBlog }, blogUpdate);
  return;
};

const DeleteBlogById = async (idBlog) => {
  await Blogs.findOneAndDelete({ _id: idBlog });
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
