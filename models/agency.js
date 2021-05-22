const mongoose = require('../db/connection')
const {Schema,model }= mongoose
const agencySchema = new Schema({
    address: String,
    phone: Number,
    email: String,
    url: String
},{timestamps:true}
)

                           //collections- by default will make a lowercase
const Agency = model('Agency',agencySchema )
//export the schema 
module.exports = Agency