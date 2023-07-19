const express= require('express')
const path = require('path')
const app = express();
const hbs = require('hbs');
const views_path = path.join(__dirname, '/views')
const bootstrap= path.join(__dirname, '/node_modules/bootstrap/dist/css')





const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://mongo:27017/mongodb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB!');
});

// Define schema
const Schema = mongoose.Schema;

const Question = new Schema({
    name: String,
    title: String,
});

// Compile model from schema
const SomeQuestion = mongoose.model("Question", Question);

const awesome_instance = new SomeQuestion({ name: "dsd", title: 'hello',kkl:'f' });
insert()
// Save the new model instance asynchronously
 async function insert(){

    await awesome_instance.save();
    console.log('inserted')
}
















const modelsPath = path.join(__dirname, 'models');

// Serve static files from the 'models' directory
app.use(express.static(modelsPath));




app.use('/css', express.static(bootstrap))



const public_dir= path.join(__dirname, '/public')

app.use(express.static(public_dir))
app.set('views', views_path )
app.set('view engine','hbs')
app.use(express.urlencoded({ extended: true }));
app.get('',(req, res)=>{
    res.render('index')
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
