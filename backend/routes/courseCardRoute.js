const express = require('express')
const courseCard = require('../modules/courseCardModule')

const router = express.Router();

// const dataCourseCard = [{
//     "image": {
//       "src": "/images/echangeServer.png",
//       "alt": "Exchange Server"
//     },
//     "title": "EXCHANGE SERVER",
//     "description": "Install, configure, and manage Exchange Server.",
//     "link": "exchange-server"
//   },
//   {
//     "image": {
//       "src": "/images/echangeServerHigh.png",
//       "alt": "exchange server High Availability"
//     },
//     "title": "EXCHANGE SERVER HIGH AVAILABILITY",
//     "description": "Install, configure, and manage Exchange Server in high availability.",
//     "link": "exchange-server-high-availability"
//   },
//   {
//     "image": {
//       "src": "/images/echangeHybrid.png",
//       "alt": "Exchange Hybrid"
//     },
//     "title": "EXCHANGE HYBRID",
//     "description": "Install, configure, and manage Exchange Hybrid.",
//     "link": "exchange-hybrid"
// }];

// courseCard.insertMany(dataCourseCard)
//   .then((createdCourses) => {
//     console.log(createdCourses);
//   })
//   .catch((error) => {
//     console.error(error);
//   }); 

//Route for getting all the courses cards

router.get('/', async (request, response) => {
    try {
        console.log("Request to /courses received");
        const coursesCards = await courseCard.find({});

        return response.status(200).json({
            count: coursesCards.length,
            data:  coursesCards,
        });
    } catch (error) {
        console.log(error.message);
        return response.status(500).send({ message: error.message });
    }
});

module.exports = router;