const express = require('express');
const router = express.Router();
const Prediction = require('../models/Prediction');

// POST /api/predict
router.post('/', async (req, res) => {
    try {
        const { name, symptoms } = req.body;

        // Placeholder for ML prediction logic
        const predictionResult = "Example Disease";

        // Save to MongoDB
        const newPrediction = new Prediction({
            name,
            symptoms,
            prediction: predictionResult
        });
        await newPrediction.save();

        res.json({ prediction: predictionResult, status: 'success' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// GET /api/predict
router.get('/', async (req, res) => {
    try {
        const predictions = await Prediction.find().select('-__v');
        res.json(predictions);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

module.exports = router;
