const MessageController = require('../controllers/message.controller')

module.exports = (app) => {
    app.get("/api/messages", MessageController.findAllMessages);
    app.get("/api/message/:_id", MessageController.findOneMessage);
    app.post("/api/message/new", MessageController.createMessage);
    app.put("/api/message/update/:_id", MessageController.updateMessage);
    app.delete("/api/message/delete/:_id", MessageController.deleteMessage);
};