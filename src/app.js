const express= require('express')
const path = require('path')
const app = express();

const hbs = require('hbs');
const views_path = path.join(__dirname, '../views')
app.set('views', views_path )
app.set('view engine','hbs')
app.use(express.urlencoded({ extended: true }));
app.get('',(req, res)=>{
    res.render('index')
})
app.post('/test',(req, res)=>{

  if(req.body.talent==='option1'){
      res.render('result', {
          name:'nadal',
      })
  }else{
      res.render('result', {
          name:'federer'
      })
  }
    // res.send(req.body.talent);
})
app.listen(5000, ()=>{
    console.log('app running on port 3000')
})