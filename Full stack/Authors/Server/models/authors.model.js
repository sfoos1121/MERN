const mongoose = require(`mongoose`);

const AuthorsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'You must enter a name!!!'],
        minLength: [3, 'Name must be at least 3 characters long.']
    },

}, {timestamps: true})

const Authors = mongoose.model("authors", AuthorsSchema);

module.exports = Authors; 