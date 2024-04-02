// import express
const express = require('express')

// initialize express app
const app = express();
const port = 8000;

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