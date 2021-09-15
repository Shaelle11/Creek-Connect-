import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    fullname:{
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 25
    },
    username:{
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20,
        unique: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    avatar: {
        type: String,
        default: "enter avatar url"
    },
    isActive: {
        type: Boolean,
        default: false
    }
},{
    timestamps: true
})

const User = mongoose.model("User", UserSchema)

export default User
