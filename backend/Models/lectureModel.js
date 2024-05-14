const { Schema, model, Types } = require('../connection');
const mySchema = new Schema({
    teacher: { type: Types.ObjectId, ref: 'teacher' },
    classroom: { type: Types.ObjectId, ref: 'class' },
    subject: String,
    description: String,
    topic: String,
    thumbnail: String,
    canvas: String,
    createdAt: { type: Date, default: Date.now },

});

module.exports = model('lecture', mySchema);