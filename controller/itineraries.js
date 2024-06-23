const express = require('express');
const router = express.Router();
const Itinerary = require('../models/itinerary');

// Create a new itinerary
router.post('/', async (req, res) => {
    try {
        const createdItinerary = await Itinerary.create(req.body);
        res.status(201).json(createdItinerary);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Get all Itineraries
router.get('/', async (req, res) => {
    try {
        const foundItinerary = await Itinerary.find();
        res.status(200).json(foundItinerary);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get an itinerary by ID
router.get('/:id', async (req, res) => {
    console.log(req.params.id);
    try {
        const foundItinerary = await Itinerary.findById(req.params.id);
        res.status(200).json(foundItinerary);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete an itinerary by ID
router.delete('/:id', async (req, res) => {
    try {
        const deleteItinerary = await Itinerary.findByIdAndDelete(req.params.id);
        res.status(200).json(deleteItinerary);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update an itinerary by ID
router.put('/:id', async (req, res) => {
    try {
        const updatedItinerary = await Itinerary.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedItinerary);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;