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
router.post("/authenticate", (req, res) => {
    console.log(req.body);
    Model.find(req.body)
    // for generation JWT required 4 things 1 payload 2
    .then((result) => {
    if (result){
    const {_id, name, email} = result;
    const payload = {_id, name, email};
    jwt.sign
     {
    payload,
    process.env.JWT_SECRET,
    {expiry: '2 days'},
    (err, token) => {
    if(err) {
    res.status(500).json({message: 'error creating token'})
    }else{
    res.status(200).json({token, role: result.role})
    }
    }
    }
    
    }else{
        res.status(401).json({message:'Invalid Credentials'})
    }
    })
    .catch((err) => {
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

export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
  
    const { drawingData } = req.body;
  
    // Here you would typically save the drawing data to a database or file
    // For demonstration purposes, let's just log it
    console.log('Received drawing data:', drawingData);
  
    // Send a success response
    res.status(200).json({ message: 'Drawing saved successfully' });
  }
  


module.exports = router;