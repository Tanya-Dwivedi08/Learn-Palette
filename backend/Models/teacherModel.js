const { Schema, model } = require('../connection');

const mySchema = new Schema({
    teachername: { type: String, required: true },
    subject: String,
    email: String,
    password: String,
    createdAt: Timestamp,
    avatar: String,
});

module.exports = model('teacher', mySchema);