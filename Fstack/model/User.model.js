import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
    name: String,
    email:String,
    passward: String,
    role:{
        type:String,
        enum:["user", "admin"],
        default: "user"
    },
    isVeryfied:{
        type: Boolean,
        default: false
    },
    verificationToken:{
        type: String
    },
    resetPasswordToken: {
        type: String
    },
    resetPasswordExpired:{
        type: Date
    }
}, 
{
    timestamps: true
});
const User = mongoose.model("User",userSchema)

export default User;