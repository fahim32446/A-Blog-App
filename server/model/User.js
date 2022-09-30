import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({


    name: String,
    email: String,
    password: String,

    createdAt: {
        type: Date,
        default: new Date()
    },
})

export default mongoose.model('User', UserSchema)