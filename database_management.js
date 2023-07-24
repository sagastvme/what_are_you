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

const player = require('./models/Player')
const PlayerSchema = mongoose.model('Player', player)
const awesome_instance = new Question({  question: 'What\'s more important to you, trophies or talent?', answers:['Trophies', 'Talent'] });
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
async function getAllQuestions() {
    try {
        const questions = await Question.find({});
        return questions;
    } catch (error) {
        throw error;
    }
}

async function getAllPlayers(){
    console.log('buscando')
    const players = await PlayerSchema.find({});
  console.log(players)
    return players;

}
async function findPlayer(name){
    const player = await PlayerSchema.findOne( {key_name:name})
return player
}
function insertDB(){
    
}



module.exports={
    findQuestionById,
    getAllQuestions,
    insert,
    getAllPlayers
    ,findPlayer
}