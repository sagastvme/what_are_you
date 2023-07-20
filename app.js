const {app} = require("./imports");
const {findQuestionById} = require('./database_management')
// Assuming the findQuestionById function returns a Promise




app.get('',(req, res)=>{

    findQuestionById('64b94f5201c3943f0f709154')
        .then((result) => {
            console.log('hola', result.answers);
            res.render('index', {answers:result.answers})
        })
        .catch((error) => {
            console.error('Error occurred:', error);
        });

})
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
