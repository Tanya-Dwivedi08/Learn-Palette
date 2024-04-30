const express = require('express');
const router = express.Router();
const Model = require('../Models/whiteboardModel');

router.post('/add', (req, res) => {
    console.log(req.body);
    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});
router.get('/getall', (req, res) => {
    Model.find()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// : denote url parameter

router.delete('/delete/:id', (req, res) => {
    Model.findByIdAndDelete(req.params.id)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.put('/update', (req, res) => {
    Model.findByIdAndUpdate(req.param.id, req.body)
        .then((result) => {
            res.status(200).json(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});
// pages/api/save-drawing.js

// export default async function handler(req, res) {
//     if (req.method !== 'POST') {
//         return res.status(405).json({ message: 'Method Not Allowed' });
//     }

//     const { drawingData } = req.body;

//     // Here you would typically save the drawing data to a database or file
//     // For demonstration purposes, let's just log it
//     console.log('Received drawing data:', drawingData);

//     // Send a success response
//     res.status(200).json({ message: 'Drawing saved successfully' });
// }



module.exports = router;