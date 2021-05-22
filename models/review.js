const mongoose = require('../db/connection')
const {Schema,model }= mongoose
const tripSchema = new Schema({
    author:String,
    body: String,
    srartrating: String
},{timestamps:true}
)

                           //collections- by default will make a lowercase
const Trip = model('Trip',tripSchema )
//export the schema 
module.exports = Trip