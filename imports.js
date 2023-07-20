const express= require('express')
const path = require('path')
const app = express();
const hbs = require('hbs');
const views_path = path.join(__dirname, '/views')
const bootstrap= path.join(__dirname, '/node_modules/bootstrap/dist/css')
const modelsPath = path.join(__dirname, 'models');
const public_dir= path.join(__dirname, '/public')

// Serve static files from the 'models' directory
app.use(express.static(modelsPath));
app.use('/css', express.static(bootstrap))
app.use(express.static(public_dir))
app.set('views', views_path )
app.set('view engine','hbs')
app.use(express.urlencoded({ extended: true }));








module.exports={
    express,
    path,
    app,
    hbs,
    views_path,
    bootstrap,
    modelsPath
}