import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
    prfilePicture: {
        type: String,
        default: "https://st2.depositphotos.com/1007566/12024/v/450/depositphotos_120246536-stock-illustration-reporter-man-live.jpg",
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
},{timestamps: true}); 

const User = mongoose.model("User", userSchema);

export default User;