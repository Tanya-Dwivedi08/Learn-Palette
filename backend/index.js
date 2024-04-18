// import express
const express = require('express')
const teacherRouter = require('./Routers/teacherRouter');
const utilRouter = require('./Routers/utilRouter');
const classRouter = require('./Routers/classRouter');
const studentRouter = require('./Routers/studentRouter');
const lectureRouter = require('./Routers/lectureRouter');
const whiteboardRouter = require('./Routers/whiteboardRouter');
const feedbackRouter = require('./Routers/feedbackRouter');

const cors = require('cors');

// initialize express app
const app = express();
const port = 5000;

//middleware
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(express.json())

app.use('/student',studentRouter)
app.use('/teacher',teacherRouter)
app.use('/class',classRouter)
app.use('/util',utilRouter)
app.use('/lecture',lectureRouter)
app.use('/whiteboard',whiteboardRouter)
app.use('/feedback', feedbackRouter)



app.get('/', (req,res) => {
    res.send('rest123');
});

app.get('/update', (req,res) => {
    res.send('update response');
});

app.get('/add', (req,res) => {
    res.send('add response');
});

app.get('/delete', (req,res) => {
    res.send('delete response');
});



app.listen(port, () => {console.log('server started');} );