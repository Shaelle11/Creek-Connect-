import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    conversationId: {
        type: String
    },
    sender: {
        type: mongoose.TYPES.ObjectId,
        ref: "user"
    },
    receiver: {
        type: mongoose.TYPES.ObjectId,
        ref: "user"
    },
    message: [{
        type: String,
        meta: [{
            delivered: Boolean,
            read: Boolean
        }]
    }]
}, {
    timestamps: true
});

const message = mongoose.model("Message", messageSchema)

export default message