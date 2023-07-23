const {app} = require("./imports");
const {findQuestionById, getAllQuestions,insert,getAllPlayers, findPlayer} = require('./database_management')
// Assuming the findQuestionById function returns a Promise




app.get('', async (req, res) => {
    try {
        const questions = await getAllQuestions();
        res.render('index', { questions: questions });
    } catch (error) {
        console.log(error);
    }

});
app.post('/test',async (req, res) => {

    // res.redirect('/nadal')
    const players = await getAllPlayers();
    console.log(req.body)
    const answers =new Set(Object.values(req.body))
// res.send(answers)
    const results=[]
    players.map( (player)=>{
   let count = 0
        player.information.forEach( (info)=>{
            if(answers.has(info)){
                count++
            }
        } )
        results.push({ 'count': count, 'player': player });

    } )
    const bigger = results.reduce((prev, current) => {
        if (current.count > prev.count) {
            return current;
        } else {
            return prev;
        }
    });

   res.redirect('/'+bigger.player.key_name)

})
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
