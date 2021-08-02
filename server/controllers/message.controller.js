const { json } = require("express");
const { model } = require('mongoose');
const Message = require('../models/message.model');


module.exports = {
    findAllMessages: (req, res) => {
        Message.find()
            .then(allMessages => res.json(allMessages))
            .catch(err => res.json(err));
    },

    findOneMessage: (req, res) => {
        Message.findOne({ _id: req.params._id })
            .then(oneMessage => res.json(oneMessage))
            .catch(err => res.json(err));
    },

    createMessage: (req, res) => {
        Message.create(req.body)
            .then(newMessage => res.json(newMessage))
            .catch(err => res.status(400).json(err));
    },

    updateMessage: (req, res) => {
        Message.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true, runValidators: true })
            .then(updateMessage => res.json(updateMessage))
            .catch(err => res.status(400).json(err));
    },

    deleteMessage: (req, res) => {
        Message.deleteOne({ _id: req.params._id })
            .then(result => res.json(result))
            .catch(err => res.json(err))
    }

}