const express = require('express')
const detailCourseCard = require('../modules/detailCourseCardModule')

const  router = express.Router();


router.get('/', async (request, response) => {
    try {
        console.log("Request to /deatil-courses received");
        const detailCourseCards = await detailCourseCard.find({});

        return response.status(200).json({
            count: detailCourseCards.length,
            data:  detailCourseCards,
        });
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

module.exports = router;