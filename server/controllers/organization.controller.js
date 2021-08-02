const { json } = require("express");
const { model } = require('mongoose');
const Organization = require('../models/organization.model');


module.exports = {
    findAllOrganizations: (req, res) => {
        Organization.find()
            .then(allOrganizations => res.json(allOrganizations))
            .catch(err => res.json(err));
    },

    findOneOrganization: (req, res) => {
        Organization.findOne({ _id: req.params._id })
            .then(oneOrganization => res.json(oneOrganization))
            .catch(err => res.json(err));
    },

    createOrganization: (req, res) => {
        Organization.create(req.body)
            .then(newOrganization => res.json(newOrganization))
            .catch(err => res.status(400).json(err));
    },

    updateOrganization: (req, res) => {
        Organization.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true, runValidators: true })
            .then(updateOrganization => res.json(updateOrganization))
            .catch(err => res.status(400).json(err));
    },

    deleteOrganization: (req, res) => {
        Organization.deleteOne({ _id: req.params._id })
            .then(result => res.json(result))
            .catch(err => res.json(err))
    }

}