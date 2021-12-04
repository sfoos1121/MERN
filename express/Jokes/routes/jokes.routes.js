const JokesController = require("../controllers/jokes.controller");

module.exports = (app)=>{
    app.get("/api/jokes", JokesController.findAllJokes);

    app.post("/api/jokes", JokesController.createNewJokes);

    app.get("/api/jokes", JokesController.findOneJokes);

    app.put("/api/jokes/:id", JokesController.updateJokes);

    app.delete("/api/jokes/:id", JokesController.deleteJokes);
}