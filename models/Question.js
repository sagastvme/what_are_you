const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const QuestionSchema = new Schema({
    id: {
        type: String, // You can change the data type if needed (String, Number, etc.)
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
})

module.exports = QuestionSchema;
