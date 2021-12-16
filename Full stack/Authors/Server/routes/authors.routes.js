const AuthorsController = require("../controllers/authors.controller");

module.exports = (app)=>{
    app.get("/api/authors", AuthorsController.findAllAuthors);

    app.post("/api/authors", AuthorsController.createNewAuthors);

    app.get("/api/authors/:id", AuthorsController.findOneAuthors);

    app.put("/api/authors/:id", AuthorsController.updateAuthors);

    app.delete("/api/authors/:id", AuthorsController.deleteAuthors);

}