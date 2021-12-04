const mongoose = require(`mongoose`);

const JokesSchema = new mongoose.Schema({
    setup: {
        type: String
    },

    punchline: {
        type: String
    },

}, {timestamps: true})

const Jokes = mongoose.model("joke", JokesSchema);

module.exports = Jokes;