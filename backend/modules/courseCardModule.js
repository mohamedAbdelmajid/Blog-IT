const {Schema, model} = require('mongoose')

const courseCardShema = new Schema(
    {
        image: {
            src: {
            type: String,
            required: true,
            },
            alt: {
            type: String,
            required: true,
            },
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        collection: 'coursesCards'
    }
)

const  CourseCard = model("courseCard", courseCardShema); 

module.exports = CourseCard;