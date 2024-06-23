const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
    tripName: String,
    location: String,
    tripType: String,
    startDate: String,
    endDate: String,
    notes: String,
});

//changed date to string

const Itinerary = mongoose.model('Itinerary', itinerarySchema);

module.exports = Itinerary;