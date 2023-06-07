const express = require('express');
const router = express.Router();
const Workouts = require('../models/WorkoutModel')


//get all workouts
router.get('/', (req, res) => {
    res.json({message: 'get all workdouts'});
})

router.get('/:id', (req, res) => {
    res.json({message: 'Get a single workout'});
})

//post a workout
router.post('/', async (req, res) => {
    const {title, load, reps} = req.body;
    try {
        const workout = await Workouts.create({title, load, reps})
        res.status(200).json(workout);

    } catch (error) {
        res.status(400).json({error: error.message});

    }

})

//delete a workout
router.delete('/:id', (req, res) => {
    res.json({message: 'Delete a workout'});

})

//update a new workout
router.patch('/:id', (req, res) => {
    res.json({message: 'Update a workout'});

})




module.exports = router

