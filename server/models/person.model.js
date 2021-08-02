const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please enter a different name."],
        minlength: [3, "Please enter a first name greater than 3 characters."],
    },
    lastName: {
        type: String,
        required: [true, "Please enter a different name."],
        minlength: [3, "Please enter a last name greater than 3 characters."],
    },
    username: {
        type: String,
        required: [true, "Please enter a different username."],
        minlength: [8, "Please enter a username at least 8 characters."],
    },
    email: {
        type: String,
        required: [true, "Please enter a valid email address or try logging in if you already have an account."],
        // email validations
    },
    phone: {
        type: Number,
        required: [true, "Please enter your mobile number."],
        // range for length?
    },
    picture: {
        // type: picture?
    },
    messages: {
        type: Array,
    },
    friends: {
        type: Array,
    },
    pets: {
        type: Array,
    }
}, { timestamps: true });

const Person = mongoose.model("Person", PersonSchema);

module.exports = Person;