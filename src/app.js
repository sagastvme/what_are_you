const express= require('express')
const path = require('path')
const app = express();

const hbs = require('hbs');
const views_path = path.join(__dirname, '../views')
const bootstrap= path.join(__dirname, '../node_modules/bootstrap/dist/css')
app.use('/css', express.static(bootstrap))
const public_dir= path.join(__dirname, '../public')
app.use(express.static(public_dir))
app.set('views', views_path )
app.set('view engine','hbs')
app.use(express.urlencoded({ extended: true }));
app.get('',(req, res)=>{
    res.render('index')
})
app.post('/test',(req, res)=>{


      res.render('result', {
          name:'nadal',image:'rafa.jpg'
      })

      // res.render('result', {
      //     name:'federer'
      // })

    // res.send(req.body.talent);
})


app.get('*',(req, res)=>{
    res.render('error')
})

app.listen(5000, ()=>{
    console.log('app running on port 3000')
})