const { ObjectId } = require('mongodb');
const { Schema, model } = require('../connection');

const mySchema = new Schema({
    // class: { type: Schema.Types.ObjectId , required: true },
    teacher: { type: Schema.Types.ObjectId , required: true },
    subject: String,
    description: String,
    topic: String,
    thumbnail: String,
    canvas:String,
    createdAt: {type : Date, default: Date.now},
   
});

module.exports = model('lecture', mySchema);