const mongoose = require('../db/connection')
const {Schema,model }= mongoose
const reviewShema = new Schema({
    author:String,
    body: String,
    srartrating: String
},{timestamps:true}
)

                           //collections- by default will make a lowercase
const Review = model('Review',reviewShema )
//export the schema 
module.exports = Review