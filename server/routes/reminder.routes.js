const ReminderController = require('../controllers/reminder.controller')

module.exports = (app) => {
    app.get("/api/reminders", ReminderController.findAllReminders);
    app.get("/api/reminder/:_id", ReminderController.findOneReminder);
    app.post("/api/reminder/new", ReminderController.createReminder);
    app.put("/api/reminder/update/:_id", ReminderController.updateReminder);
    app.delete("/api/reminder/delete/:_id", ReminderController.deleteReminder);
};