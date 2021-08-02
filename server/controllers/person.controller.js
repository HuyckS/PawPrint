const { json } = require("express");
const { model } = require('mongoose');
const Person = require('../models/person.model');


module.exports = {
    findAllPersons: (req, res) => {
        Person.find()
            .then(allPersons => res.json(allPersons))
            .catch(err => res.json(err));
    },

    findOnePerson: (req, res) => {
        Person.findOne({ _id: req.params._id })
            .then(onePerson => res.json(onePerson))
            .catch(err => res.json(err));
    },

    createPerson: (req, res) => {
        Person.create(req.body)
            .then(newPerson => res.json(newPerson))
            .catch(err => res.status(400).json(err));
    },

    updatePerson: (req, res) => {
        Person.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true, runValidators: true })
            .then(updatePerson => res.json(updatePerson))
            .catch(err => res.status(400).json(err));
    },

    deletePerson: (req, res) => {
        Person.deleteOne({ _id: req.params._id })
            .then(result => res.json(result))
            .catch(err => res.json(err))
    }

}