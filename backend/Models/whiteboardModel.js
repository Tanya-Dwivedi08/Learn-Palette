
const { Schema, model, Types } = require('../connection');

const mySchema = new Schema({
    lecture: { type: Types.ObjectId, ref: 'lecture' },
    content: String,
    thumbnail: String,
    createdAt: { type: Date, default: Date.now },

});

module.exports = model('whiteboard', mySchema);