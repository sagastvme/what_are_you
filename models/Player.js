const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Player = new Schema(
    {
       name:{
           required:true,
           type:String
       } ,
        image:{
           type:String,
            required: true
        },
        information:[
            {
                type:String,
                required:true
            }
        ],
        key_name:{
           type:String,
            required:true,
            unique:true
        }
    }
)

module.exports = Player