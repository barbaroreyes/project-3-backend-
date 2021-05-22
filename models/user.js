const mongoose = require('../db/connection')
const {Schema,model }= mongoose
const userSchema = new Schema({
    usernames: String,
    password: String,
    time: String
},{timestamps:true}
)

                           //collections- by default will make a lowercase
const User = model('Trip',tripSchema )
//export the schema 
module.exports = Trip