import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    books:{
        type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Book'}],
        default: []
    }
});

export const User =  mongoose.model("User", userSchema);