import mongoose from 'mongoose';

const groupSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    avatar: {
        type: String,
        default: "add avatar url"
    },
    members: [{
        isAdmin: {
            type: Boolean,
            default: false
        },
        user: {
            type: mongoose.Types.ObjectId,
            ref: "User"
        }
    }],
    messages: [{
        type: mongoose.Types.ObjectId,
        ref: "Message"
    }]
}, { 
    timestamps: true
});

const group = mongoose.model("Group", groupSchema)

export default group