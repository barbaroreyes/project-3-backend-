const mongoose = require('../db/connection')
const {Schema,model }= mongoose

const tripSchema = new Schema({
    name: String,
    photo: String,
    description: String,
    activities: String,
    cost: String,
    agency: String,
    location: {
        // Location data stored as GeoJSON object
        //  https://docs.mongodb.com/manual/geospatial-queries/
        // to calculated distances, this would need to be converted to a 2dsphere
        name: String,
        type: "Point",  
        // 2D coordinates listed as [longitude, lattitude]
        coordinates: [Number, Number] 
    },
    agency: {
        ref: "Agency",
        type: mongoose.Schema.Types.ObjectId
    },
    reviews: [{
        ref: "Review",
        type: mongoose.Schema.Types.ObjectId
    }]
})

                           //collections- by default will make a lowercase
const Trip = model('Trip', tripSchema)
//export the schema 
module.exports = Trip