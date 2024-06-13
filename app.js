import express from 'express';
import mongoose from 'mongoose';
import router from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";

const app = express();

app.use(express.json());

app.use("/api/user", router); 
//http://localhost:5000/api/user
app.use("/api/blog", blogRouter);

mongoose.connect('mongodb+srv://divyyanshupandey:Vx6Ibd0UUIZoa5uL@cluster0.qdt5iwu.mongodb.net/Blog?retryWrites=true&w=majority&appName=Cluster0'
).then(() =>
    app.listen(5000)).then(() => 
    console.log('Connected to the database')).catch((err) => 
    console.log(err));

