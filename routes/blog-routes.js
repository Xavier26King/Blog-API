import express from 'express';
import { deleteBlog, updateBlog, addBlog, getAllBlogs } from '../controllers/blog-controller.js';

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.delete("/delete/:id", deleteBlog);

export default blogRouter;