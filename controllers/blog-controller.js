import Blog from '../model/Blog.js';
import User from '../model/User.js';
import mongoose from 'mongoose';

export const getAllBlogs = async (req, res, next) => {
    let blogs;
    try {
        blogs = await Blog.find();
    } catch (err) {
        console.log(err);
    }
    if(!blogs) {
        return res.status(404).json({message: 'No blogs found'});
    }
    return res.status(200).json({blogs});
};

export const addBlog = async (req, res, next) => {
    const { title, description, image, user } = req.body;

    let existingUser;
    try{
        existingUser = await User.findById(user);
    } catch (err) {
        return console.log(err);
    } 
    if(!existingUser) {
        return res.status(400.).json({message: 'User not found'});
    }  
    const newBlog = new Blog({
        title,
        description,
        image,
        user,
    });
    try {
        const session = await mongoose.startSession();
        session.startTransaction();
        await newBlog.save({session});
        existingUser.blogs.push(newBlog);
        await existingUser.save({session});
        await session.commitTransaction();
    } catch (err) {
        console.log(err);
        return res.status(500).json({message: err});
    }
    return res.status(201).json({newBlog});
};

export const updateBlog = async (req, res, next) => {
    const { title, description } = req.body;
    const blogId = req.params.id;
    let blog;
    try {
        blog = await Blog.findByIdAndUpdate(blogId, {title, description});
    } catch (err) {
        return console.log(err);
    }
    if(!blog) {
        return res.status(500).json({message: 'Unable to update the blog'});
    }
    return res.status(200).json({blog});
};

export const deleteBlog = async (req, res, next) => {
    const blogId = req.params.id;
    let blog;
    try {
        blog = await Blog.findByIdAndDelete(blogId).populate('user');
        await blog.user.blogs.pull(blog);
        await blog.user.save();
    } catch (err) {
        return console.log(err);
    }
    if(!blog) {
        return res.status(500).json({message: 'Unable to delete the blog'});
    }
    return res.status(200).json({message: 'Blog deleted successfully'});
};