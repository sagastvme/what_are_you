const mongoose = require('mongoose');
// Connect to MongoDB
mongoose.connect('mongodb://mongo:27017/mongodb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB!');
});

const QuestionSchema = require('./models/Question')

// Compile model from schema
const Question = mongoose.model("Question", QuestionSchema);

const awesome_instance = new Question({  question: 'who do you like better', answers:[1,2,3] });
// insert().then(r => console.log('inserted new question'))
// Save the new model instance asynchronously
async function insert(){

    await awesome_instance.save();
    console.log('inserted')
}
async function findQuestionById(questionId) {
    try {
        const question = await Question.findById(questionId).exec();
        return question;
    } catch (error) {
        console.error('Error while finding question by ID:', error);
        throw error; // You can handle the error here or pass it to the caller
    }
}


module.exports={
    findQuestionById
}