const mongoose = require('mongoose');

const PredictionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    symptoms: { type: [String], required: true },
    prediction: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Prediction', PredictionSchema);
