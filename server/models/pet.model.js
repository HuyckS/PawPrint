const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter a name."],
    },
    type: {
        type: String,
        required: [true, "Please select pet type."],
    },
    picture: {
        // type: picture?
    },
    desc: {
        type: String,
        // range
        // maxlength: [250, "Please enter a description greater than 3 characters."]
    },
    age: {
        type: Number,
    },
    veterinarian: {
        type: Array,
    },
    foodSchedule: {
        type: String,
    },
    medications: {
        type: String,
    },
    notes: {
        type: Array,
    },
}, { timestamps: true });

const Pet = mongoose.model("Pet", PetSchema);

module.exports = Pet;