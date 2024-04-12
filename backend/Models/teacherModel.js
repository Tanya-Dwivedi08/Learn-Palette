const { Schema, model } = require('../connection');

const mySchema = new Schema({
    teachername: { type: String, required: true },
    subject: String,
    email: String,
    password: String,
    createdAt: {type : Date, default: Date.now},
    avatar: {type : String, default: 'teacher-avatar-placeholder.jpg'},
});

module.exports = model('teacher', mySchema);