const express = require('express')
const { PORT, mongoDBURL } = require('./config')
const mongoose = require('mongoose')
const cors = require('cors')

const courses = require('./routes/courseCardRoute.js')
const detailCourseCard = require('./routes/detailCourseCardRoute.js')

const app = express();

// Middleware for parsing request body
app.use(express.json());
// Middleware for handling CORS POLICY
app.use(cors());

  
app.use('/courses',  courses);
app.use('/detail-course',  detailCourseCard);
  
mongoose.connect(mongoDBURL)
    .then(() => {
        console.log('App connected to database');
        app.listen(PORT, () => {
            console.log(`App is listenning to port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });