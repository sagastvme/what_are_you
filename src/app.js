const express= require('express')
const path= require('path');
const app = express();
const hbs = require('hbs')


const public_dir_path= path.join(__dirname, '../views')
app.use(express.static(public_dir_path));
const partials_path= path.join(__dirname,'../views/partials' )
const views_path= path.join(__dirname, '../views/templates')
hbs.registerPartials(partials_path)
app.set('views', views_path )
app.set('view engine','hbs')

app.get('',(req, res)=>{
    res.render('index',{
        name:'edu'
    });
})













app.listen(3000,()=>{
    console.log('server up on port 3000')
})