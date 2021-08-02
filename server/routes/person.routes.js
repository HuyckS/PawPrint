const PersonController = require('../controllers/person.controller')

module.exports = (app) => {
    app.get("/api/persons", PersonController.findAllPersons);
    app.get("/api/person/:_id", PersonController.findOnePerson);
    app.post("/api/person/new", PersonController.createPerson);
    app.put("/api/person/update/:_id", PersonController.updatePerson);
    app.delete("/api/person/delete/:_id", PersonController.deletePerson);
};