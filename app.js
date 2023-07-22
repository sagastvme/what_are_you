const {app} = require("./imports");
const {findQuestionById, getAllQuestions,insert} = require('./database_management')
// Assuming the findQuestionById function returns a Promise




app.get('', async (req, res) => {
    try {

        const questions = await getAllQuestions();
        console.log(questions);
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
    res.render('result', {
        name:'nadal',image:'rafa.jpg'
    })
})


app.get('*',(req, res)=>{
    res.render('error')
})

app.listen(3000, ()=>{
    console.log('app running on port 3000')
})
