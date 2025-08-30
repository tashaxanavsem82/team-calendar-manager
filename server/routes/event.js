const express = require('express');
const router = express.Router();

// Event Model (Placeholder)
const Event = require('../models/Event');

// @route   GET api/events
// @desc    Get All Events
router.get('/', (req, res) => {
  Event.find()
    .then(events => res.json(events));
});

// @route   POST api/events
// @desc    Create An Event
router.post('/', (req, res) => {
  const newEvent = new Event(req.body);
  newEvent.save().then(event => res.json(event));
});

module.exports = router;