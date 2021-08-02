const mongoose = require("mongoose");

const OrganizationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter an organization name."],
    },
    picture: {
        // type: picture?
    },
    address: {
        type: String,
        required: [true, "Please enter an address."],
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
    services: {
        type: Number,
        required: [true, "Please enter your mobile number."],
        // range for length?
    },
}, { timestamps: true });

const Organization = mongoose.model("Organization", OrganizationSchema);

module.exports = Organization;