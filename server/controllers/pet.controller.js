const { json } = require("express");
const { model } = require('mongoose');
const Pet = require('../models/pet.model');


module.exports = {
    findAllPets: (req, res) => {
        Pet.find()
            .then(allPets => res.json(allPets))
            .catch(err => res.json(err));
    },

    findOnePet: (req, res) => {
        Pet.findOne({ _id: req.params._id })
            .then(onePet => res.json(onePet))
            .catch(err => res.json(err));
    },

    createPet: (req, res) => {
        Pet.create(req.body)
            .then(newPet => res.json(newPet))
            .catch(err => res.status(400).json(err));
    },

    updatePet: (req, res) => {
        Pet.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true, runValidators: true })
            .then(updatePet => res.json(updatePet))
            .catch(err => res.status(400).json(err));
    },

    deletePet: (req, res) => {
        Pet.deleteOne({ _id: req.params._id })
            .then(result => res.json(result))
            .catch(err => res.json(err))
    }

}