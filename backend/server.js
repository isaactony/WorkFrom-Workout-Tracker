const express = require('express');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 4000;
const workoutRoutes = require('./routes/workout');
const mongoose = require('mongoose');


app.use(express.json());

// app.use((req, res, next) => {
//     console.log(req.path, req.method);
// })

//connect to db
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`connected to database and listening on ${PORT}`);
        })
    })
    .catch(err => console.error(err))   

app.use("/api/workouts", workoutRoutes);


