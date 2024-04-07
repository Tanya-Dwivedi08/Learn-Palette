const mongoose = require('mongoose');

const url = "mongodb+srv://shipranigotiya:sapna@cluster0.kz1l5f9.mongodb.net/learnpalette?retryWrites=true&w=majority&appName=Cluster0"
// asynchronous function - return Promise object
mongoose.connect(url)
.then((result) => {
    console.log('database connected successfully');
})
.catch((err) => {
    console.log(err);
});

module.exports = mongoose;
