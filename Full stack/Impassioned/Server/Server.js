require("dotenv").config();
const express = require('express');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({   credentials: true,
    origin: "http://localhost:3000"     
}));

app.use(cookieParser());

require("./config/mongoose.config");
require('./routes/user.routes')(app);
require('./routes/impassioned.routes')(app);
//Longhand;
//const impassionedRoutes = require('./routes/impassioned.routes');
//impassionedRoutes(app);


const port = 8000;

app.listen(port, ()=>console.log(`Server connected on port ${port}`));