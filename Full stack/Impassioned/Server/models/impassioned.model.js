const mongoose = require(`mongoose`);

const ImpassionedSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'You must enter a name.'],
    },
    
    date: {
        type: Date,
        required: [true, 'You must select a date.'],
    },

    time: {
        type: String,
        required: [true, 'You must enter a time.'],
    },

    mood: {
        type: String,
        required: [true, 'You must select mood.'],
    },

    positivity: {
        type: [String],
        required: [false],
    },

    gratitude: {
        type: [String],
        required: [false],
    },

    goals: {
        type: [String],
        required: [false],
    },

    wellness: {
        type: [String],
        required: [false],
    },

    createdBy: {
        type: String       
    },
    likes: [{        
        userId: {
            type: String
        }        
    }]

}, {timestamps: true})

const Impassioned = mongoose.model("impassioned", ImpassionedSchema);

module.exports = Impassioned; 