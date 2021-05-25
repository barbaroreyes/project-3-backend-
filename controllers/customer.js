const express = require("express");
const router = express.Router();
const Customer = require("../models/customer");
const Trip = require("../models/trip");

// All routes here appended to <url>/customer

///INDEX///
router.get("/", async (req, res) => {
	const allCustomers = await Customer.find({});
	res.json({
		status: 200,
		data: allCustomers,
	});
});

/// SHOW ///
router.get("/:id", async (req, res) => {
	const customer = await Customer.findById(req.params.id);
	res.json({
		status: 200,
		data: customer,
	});
});

/// POST ///
router.post("/", async (req, res) => {
	const customer = await Customer.create(req.body);
	res.json({
		status: 200,
		msg: "data received",
		data: customer,
	});
});

/// UPDATE add or change preferences on profile page ///
//      TODO - elsewhere.  This controller will be used
//      Frontend:
//          Establish list of preferences, applicable to customers and trips
//          Add preference array to customers schema
/// UPDATE ///
router.put("/:id", async (req, res) => {
	const customer = await Customer.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
	});
	res.json({
		status: 200,
		data: customer,
	});
});

/// DELETE ///
router.delete("/:id", async (req, res) => {
	await Customer.findByIdAndDelete(req.params.id);
	res.json({
		status: 200,
	});
});

///  SHOW relations
router.get("/:id/trips", async (req, res) => {
	console.log("customer / get populated trip data");
	// Get the customer and retrieve the associated trips
	await Customer.findById(req.params.id)
		.populate("booked_trips_ref")
		.exec((err, customer) => {
			if (err) {
                console.log(err )
				res.json({ status: 404, msg: "no booked trips" });
			}
			console.log("trips");
			res.json({
				status: 200,
				data: customer,
			});
		});
});

/// UPDATE Bind trips to a customer ///
//  TODO check for existing IDs
router.put("/:id/addTrips", async (req, res) => {
	console.log("customer / trip update");
	const customer = await Customer.findById(req.params.id);
	if (customer.booked_trips.length > 0) {
		// Construct a filter from the booked trips
		const filter = {
			name: {
				$in: customer.booked_trips,
			},
		};
		// Use the filter to return matching trips
		const trips = await Trip.find(filter).exec();
		// Get all the ids in an array
		const tripIds = trips.map((trip) => trip._id);
		// push the retrieved trip ids onto the customer document
		const updatedCustomer = await Customer.findByIdAndUpdate(
			req.params.id,
			{ $addToSet: { booked_trips_ref: { $each: tripIds } } },
			{ new: true }
		);

		await Customer.findById(req.params.id)
			.populate("booked_trips_ref")
			.exec((err, customer) => {
				if (err) console.log("error", err);
				console.log("trips");
				res.json({
					status: 200,
					data: customer,
				});
			});
	}
});

module.exports = router;
