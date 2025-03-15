import mongoose from "mongoose";
import bcrypt from "bcryptjs"
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

    userSchema.pre("save", async function (next) {
        if (this.isModified("password")) {
            this.password = await bcrypt.hash(this.password, 10)
        }

        next();
    })



const User = mongoose.model("User",userSchema)

export default User;