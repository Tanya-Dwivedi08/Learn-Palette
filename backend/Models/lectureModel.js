const { ObjectId } = require('mongodb');
const { Schema, model } = require('../connection');

const mySchema = new Schema({
    teacher: { type: Schema.Types.ObjectId, ref: 'teacher' },
    subject: String,
    description: String,
    topic: String,
    thumbnail: String,
    canvas: String,
    createdAt: { type: Date, default: Date.now },

});

module.exports = model('lecture', mySchema);