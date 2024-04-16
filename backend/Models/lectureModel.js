const { Schema, model } = require('../connection');

const mySchema = new Schema({
    teachername: { type: String, required: true },
    subject: String,
    
    createdAt: {type : Date, default: Date.now},
   
});

module.exports = model('lecture', mySchema);