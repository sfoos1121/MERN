const express = require("express");
const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

require("./config/mongoose.config");
require("./routes/jokes.routes")(app); //when you require a route you have to add (app) to the end of it.

const port = 8000;

app.listen(port, () => console.log(`Server connected on port ${port}`));




