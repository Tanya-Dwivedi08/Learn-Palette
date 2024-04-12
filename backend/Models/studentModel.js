const { Schema, model } = require('../connection');

const mySchema = new Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: String,
    password: String,
    cpassword: String
});

module.exports = model('student', mySchema);