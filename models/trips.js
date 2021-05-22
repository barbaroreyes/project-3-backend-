const mongoose = require('../db/connection')
const {Schema,model }= mongoose
const tripSchema = new Schema({
    name: String,
    img: String,
    description: String,
    activities: [],
    costs: Number

},{timestamps:true}
)

                           //collections- by default will make a lowercase
const Trip = model('Trip',tripSchema )
//export the schema 
module.exports = Trip