const express = require('express')
const router = express.Router()
const Trips = require('../models/trips')

///GET///
router.get('/', async (req, res) => {
    const all = await Trips.find({})
    res.json({
        status: 200,
        data: all
    })
})

/// POST ///
router.post('/', async (req, res) => {
    const all = await Trips.create(req.body)
    res.json({
        status: 200,
        msg: "data received",
        data: all
    })
})

/// PUT ///
router.put('/:id', async (req, res) => {
    const trips = await Trips.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.json({
        status: 200,
        data: trips
    })
})

/// DELETE ///
router.delete('/:id', async (req, res) => {
    await Trips.findByIdAndDelete(req.params.id)
        res.json({
            status: 200,
        });
})


module.exports = router