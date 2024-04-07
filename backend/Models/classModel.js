const { Schema, model } = require('../connection');

const mySchema = new Schema({
    teacherid: { type: varchar, required: true},
    name: { type: String, required: true },
    description: String,
    tags: String,
    cover: String,
    icons: String,
    createdAt: Timestamp,
});

module.exports = model('class', mySchema);