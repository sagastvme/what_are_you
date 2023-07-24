const {app} = require("./imports");
const {findQuestionById, getAllQuestions,insert,getAllPlayers, findPlayer} = require('./database_management')
// Assuming the findQuestionById function returns a Promise


const { check, validationResult } = require('express-validator');

const rules = [
    check("What's more important to you, trophies or talent?")
        .notEmpty().withMessage("Please select what's more important: trophies or talent"),

    check("Do you prefer aggressive or defensive gameplay?")
        .notEmpty().withMessage("Please select your preference: aggressive or defensive gameplay"),

    check("Which tennis surface do you enjoy playing on the most?")
        .notEmpty().withMessage("Please select your favorite tennis surface"),

    check("What is your favorite shot in tennis?")
        .notEmpty().withMessage("Please select your favorite shot in tennis"),

    check("Are you more emotional or composed on the court?")
        .notEmpty().withMessage("Please select your emotional state on the court"),

    check("Where are you from?")
        .notEmpty().withMessage("Please select your country of origin"),

    check("Do you suffer from injuries?")
        .notEmpty().withMessage("Please select if you suffer from injuries"),
];

app.get('', async (req, res) => {
    try {
        const questions = await getAllQuestions();
        res.render('index', { questions: questions });
    } catch (error) {
        console.log(error);
    }

});
app.post('/', rules, async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // If there are errors, render the form again with the error messages
        const questions = await getAllQuestions();
        return res.render('index', { errors: errors.array(), questions:questions });
    } else {
        // All fields are present and valid, handle the form submission
        // Your form submission logic goes here

        // res.redirect('/nadal')
        const players = await getAllPlayers();
        console.log(req.body);
        const answers = new Set(Object.values(req.body));
        // res.send(answers);
        const results = [];
        players.forEach((player) => {
            let count = 0;
            player.information.forEach((info) => {
                if (answers.has(info)) {
                    count++;
                }
            });
            results.push({ count: count, player: player });
        });

        const bigger = results.reduce((prev, current) => {
            if (current.count > prev.count) {
                return current;
            } else {
                return prev;
            }
        });

        res.redirect('/' + bigger.player.key_name);
    }
});
app.get('/:player',async (req, res) => {
    const player = req.params.player
    const tennis_player = await findPlayer(player)
    if (!tennis_player) {
        return res.render('error')
    }
    res.render('result', {
        name:tennis_player['name'],
    image:tennis_player['image']
    });
})




app.get('*',(req, res)=>{
    res.render('error')
})

app.listen(3000, ()=>{
    console.log('app running on port 3000')
})
