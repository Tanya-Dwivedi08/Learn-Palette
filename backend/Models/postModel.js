const { Schema, model } = require('../connection');

const mySchema = new Schema({
    username : {type : String, required : true},
    caption : String,
    image : String,
    postedOn : Date,
    likes : {type : Number, default : 0},
    shares: {type : Number, default : 0}
});

module.exports = model('posts', mySchema);