import express from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from 'cors';
import PostRoutes from './routes/posts.js'
import AuthRoutes from './routes/auth.js'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connected"))
    .catch((err) => {
        console.log(err)
    });
;

app.use(express.json());
app.use('/api/post', PostRoutes);
app.use('/api/auth', AuthRoutes);

  

app.listen(process.env.PORT || PORT, () => {
    console.log(`Running on ${PORT}`);
});