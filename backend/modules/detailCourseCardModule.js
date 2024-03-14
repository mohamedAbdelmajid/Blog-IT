const { Schema, model } = require('mongoose');

const subjectSchema = new Schema({
    title: String,
    list: [{
      title: String,
      link: String,
    }],
});

const detailCourseCardSchema = new Schema(
    {
        title: String,
        description: {
        text: String,
        textLink: String,
        link: String,
        },
        subjects: [subjectSchema],
        text: String,
        updatedAt: String,
        important: {
        title: String,
        textLink: String,
        link: String,
        text: String,
        }
    },
    {
        timestamps: true,
        collection: 'detailsCoursesCards'
    }
);

const detailCourseCard = model('detailCourseCard', detailCourseCardSchema);

module.exports = detailCourseCard;