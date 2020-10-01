const UsersController = require("../controllers/UsersController");
const DetailsController = require("../controllers/DetailsController");

module.exports = {
    async routes (server) {
        server.post("/user/create", UsersController.create);
        server.post("/user/profile", UsersController.createProfile);
        server.patch("/user/profile", UsersController.updateProfile);
        server.get("/user/profile", UsersController.getProfile);
        server.post("/user/login", UsersController.login);
        server.get("/getDetails", DetailsController.getAll);
        server.post("/details", DetailsController.create);
        server.patch("/details", DetailsController.patch);
        server.get("/download/cv", UsersController.downloadCV);
    }
}