const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

require('./config/mongoose.config');

app.use(cors({
    origin: "http://localhost:3000"
}));

require('./routes/authors.routes')(app);

const port = 8000;

app.listen(port, ()=>console.log(`Server is connected on port ${port}`));