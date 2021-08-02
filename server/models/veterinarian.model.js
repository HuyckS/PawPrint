const mongoose = require("mongoose");

const VeterinarianSchema = new mongoose.Schema({
    vetName: {
        type: String,
        required: [true, "Please enter a veterinarian name."],
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
}, { timestamps: true });

const Veterinarian = mongoose.model("Veterinarian", VeterinarianSchema);

module.exports = Veterinarian;