const mongoose = require('mongoose');

const Schema = mongoose.Schema

const clientSchema = new Schema({
    first_name: {
        type: 'String',
        required: true
        
    },
    last_name: {
        type: 'String',
        required: true
    }, 
    age: {
        type: 'Number',
        required: true
    },
    email: {
        type: 'String',
        required: true
    }


}, {timestamps: true});

//schema define structure
const workoutSchema = new Schema({
    title: {
        type: String,
        required: true

    },
    reps: {
        type: Number,
        required: true
    },
    load: {
        type: Number,
        required: true
    }
}, { timestamps: true })


module.exports = mongoose.model('Workout', workoutSchema);
