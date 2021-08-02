const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, "Please enter a message name."],
    },
    sender: {
        type: String,
    },
}, { timestamps: true });

const Message = mongoose.model("Message", MessageSchema);

module.exports = Message;