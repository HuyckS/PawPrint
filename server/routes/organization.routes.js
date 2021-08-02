const OrganizationController = require('../controllers/organization.controller')

module.exports = (app) => {
    app.get("/api/organizations", OrganizationController.findAllOrganizations);
    app.get("/api/organization/:_id", OrganizationController.findOneOrganization);
    app.post("/api/organization/new", OrganizationController.createOrganization);
    app.put("/api/organization/update/:_id", OrganizationController.updateOrganization);
    app.delete("/api/organization/delete/:_id", OrganizationController.deleteOrganization);
};