const mongoose = require('mongoose');

// Create a Schema for the Question
const questionSchema = new mongoose.Schema({
    id: {
        type: String, // You can change the data type if needed (String, Number, etc.)
        required: true,
        unique: true,
    },
    question: {
        type: String,
        required: true,
    },
    answers: [{
        type: String,
        required: true,
    }],
});

// Create the Question model using the schema
const Question = mongoose.model('Question', questionSchema);

module.exports = Question;
