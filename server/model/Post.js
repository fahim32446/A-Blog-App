import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: String,
    description: String,
    img: String,
    category: String,

    createdAt: {
        type: Date,
        default: new Date()
    },
})

export default mongoose.model('Post', PostSchema)