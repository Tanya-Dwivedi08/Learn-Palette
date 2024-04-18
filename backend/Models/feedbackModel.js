const { Schema, model, Types } = require('../connection');

const mySchema = new Schema({
    suggestion: String,
    email: String,
    createdAt: { type: Date, default: Date.now },
});

module.exports = model('feedback', mySchema);