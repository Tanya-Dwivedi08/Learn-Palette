const { Schema, model, Types } = require('../connection');

const mySchema = new Schema({
    fname: { type: String, required: true },
    lname: { type: String, required: true },
    email: String,
    suggestion: String,
    createdAt: { type: Date, default: Date.now },
});

module.exports = model('contact', mySchema);