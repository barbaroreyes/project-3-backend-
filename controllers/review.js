const express = require('express')
const router = express.Router()
const Review = require('../models/review')

///GET///
router.get('/', async (req, res) => {
    const all = await Review.find({})
    res.json({
        status: 200,
        data: all
    })
})

/// POST ///
router.post('/', async (req, res) => {
    const allReviews = await Review.create(req.body)
    res.json({
        status: 200,
        msg: "data received",
        data: allReviews
    })
})

/// PUT ///
router.put('/:id', async (req, res) => {
    const singleReview = await Review.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.json({
        status: 200,
        data: singleReview
    })
})

/// DELETE ///
router.delete('/:id', async (req, res) => {
    await Review.findByIdAndDelete(req.params.id)
        res.json({
            status: 200,
        });
})


module.exports = router