const {app} = require("./imports");
const {findQuestionById, getAllQuestions,insert} = require('./database_management')
// Assuming the findQuestionById function returns a Promise




app.get('', async (req, res) => {
    try {
        const questions = await getAllQuestions();
        res.render('index', { questions: questions });
    } catch (error) {
        console.log(error);
    }
});
app.post('/test',(req, res)=>{

      res.redirect('/nadal')
      // res.render('result', {
      //     name:'federer'
      // })

    // res.send(req.body.talent);
})
app.get('/nadal',(req, res)=>{
    const name = 'nadal';
    let image = name + '.jpg';
    res.render('result', {
        name,
        image
    });
})


app.get('*',(req, res)=>{
    res.render('error')
})

app.listen(3000, ()=>{
    console.log('app running on port 3000')
})
