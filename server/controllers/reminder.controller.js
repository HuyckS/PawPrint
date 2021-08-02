const { json } = require("express");
const { model } = require('mongoose');
const Reminder = require('../models/reminder.model');


module.exports = {
    findAllReminders: (req, res) => {
        Reminder.find()
            .then(allReminders => res.json(allReminders))
            .catch(err => res.json(err));
    },

    findOneReminder: (req, res) => {
        Reminder.findOne({ _id: req.params._id })
            .then(oneReminder => res.json(oneReminder))
            .catch(err => res.json(err));
    },

    createReminder: (req, res) => {
        Reminder.create(req.body)
            .then(newReminder => res.json(newReminder))
            .catch(err => res.status(400).json(err));
    },

    updateReminder: (req, res) => {
        Reminder.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true, runValidators: true })
            .then(updateReminder => res.json(updateReminder))
            .catch(err => res.status(400).json(err));
    },

    deleteReminder: (req, res) => {
        Reminder.deleteOne({ _id: req.params._id })
            .then(result => res.json(result))
            .catch(err => res.json(err))
    }

}