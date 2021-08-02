const VeterinarianController = require('../controllers/veterinarian.controller')

module.exports = (app) => {
    app.get("/api/veterinarians", VeterinarianController.findAllVeterinarians);
    app.get("/api/veterinarian/:_id", VeterinarianController.findOneVeterinarian);
    app.post("/api/veterinarian/new", VeterinarianController.createVeterinarian);
    app.put("/api/veterinarian/update/:_id", VeterinarianController.updateVeterinarian);
    app.delete("/api/veterinarian/delete/:_id", VeterinarianController.deleteVeterinarian);
};