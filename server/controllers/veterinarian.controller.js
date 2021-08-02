const { json } = require("express");
const { model } = require('mongoose');
const Veterinarian = require('../models/veterinarian.model');


module.exports = {
    findAllVeterinarians: (req, res) => {
        Veterinarian.find()
            .then(allVeterinarians => res.json(allVeterinarians))
            .catch(err => res.json(err));
    },

    findOneVeterinarian: (req, res) => {
        Veterinarian.findOne({ _id: req.params._id })
            .then(oneVeterinarian => res.json(oneVeterinarian))
            .catch(err => res.json(err));
    },

    createVeterinarian: (req, res) => {
        Veterinarian.create(req.body)
            .then(newVeterinarian => res.json(newVeterinarian))
            .catch(err => res.status(400).json(err));
    },

    updateVeterinarian: (req, res) => {
        Veterinarian.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true, runValidators: true })
            .then(updateVeterinarian => res.json(updateVeterinarian))
            .catch(err => res.status(400).json(err));
    },

    deleteVeterinarian: (req, res) => {
        Veterinarian.deleteOne({ _id: req.params._id })
            .then(result => res.json(result))
            .catch(err => res.json(err))
    }

}