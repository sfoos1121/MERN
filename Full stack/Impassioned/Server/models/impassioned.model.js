const mongoose = require(`mongoose`);

const ImpassionedSchema = new mongoose.Schema({
    date: {
        type: Number,
        required: [true, 'You must select a date.'],
    },

    time: {
        type: Number,
        required: [true, 'You must enter a time.'],
    },

    mood: {
        type: String,
        required: [true, 'You must select mood.'],
    },

    positivity: {
        type: [String],
        required: [false,'Write about something good that happened.' ],
    },

    gratitude: {
        type: [String],
        required: [false,'Give thanks for the special moments.' ],
    },

    goals: {
        type: [String],
        required: [false,'Things to improve or accomplish.' ],
    },

    wellness: {
        type: [String],
        required: [false,'Activities to help ope and care for yourself' ],
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

}, {timestamps: true})

const Impassioned = mongoose.model("impassioned", ImpassionedSchema);

module.exports = Impassioned; 