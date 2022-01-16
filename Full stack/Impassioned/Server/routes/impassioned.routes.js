const { authenticate } = require("../config/jwt.config");
const ImpassionedController = require("../controllers/Impassioned.controller");

module.exports = (app)=>{
    app.get("/api/impassioned", ImpassionedController.findAllImpassioned);

    app.post("/api/impassioned", authenticate, ImpassionedController.createNewImpassioned);

    app.get("/api/impassioned/:id", ImpassionedController.findOneImpassioned);

    app.put("/api/impassioned/:id", ImpassionedController.updateImpassioned);

    app.delete("/api/impassioned/:id", ImpassionedController.deleteImpassioned);

}