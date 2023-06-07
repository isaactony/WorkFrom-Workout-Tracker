const express = require('express');
const router = express.Router();
const { createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout } = require('../controllers/workoutController');

//get all workouts
router.get('/', getWorkouts)

//get a single workout
router.get('/:id', getWorkout)

//post a workout
router.post('/', createWorkout)

//delete a workout
router.delete('/:id', deleteWorkout)

//update a new workout
router.patch('/:id', updateWorkout)




module.exports = router

