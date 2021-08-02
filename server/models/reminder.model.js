const mongoose = require('mongoose');

const ReminderSchema = new mongoose.Schema({
    desc: {
        type: String,
        required: [true, "Please enter a description."],
    },
    type: {
        type: String,
        required: [true, "Please select reminder type."],
    },
    pet: {
        type: String,
        required: [true, "Please select which pet this is for or if it is a general reminder."],
    },
    date: {
        type: Date,
        // range
        // maxlength: [250, "Please enter a description greater than 3 characters."]
    },
    weekday: {
        type: String,
    },
    time: {
        type: Number,
    },
}, { timestamps: true });

const Reminder = mongoose.model("Reminder", ReminderSchema);

module.exports = Reminder;