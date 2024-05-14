const express = require('express');
const router = express.Router();
const Model = require('../Models/lectureModel');
const { log } = require('console');
const verifyToken = require('./verifyToken');
const fs = require('fs').promises;

router.post('/add', verifyToken, (req, res) => {
    req.body.teacher = req.user._id;
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

router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
        .then((result) => {
            res.status(200).json(result)
        }).catch((err) => {
            console.log(err);
            res.status(500).json(err)
        });
})

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

router.get("/getbyid/:id", (req, res) => {
    Model.findById(req.params.id)
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.status(500).json(err)
        });
})

router.get("/getbyclass/:id", (req, res) => {
    Model.find({classroom : req.params.id})
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            res.status(500).json(err)
        });
})

router.put("/update/:id", (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, { new: true })             //new:true is for data update
        .then((result) => {
            res.json(result)
        }).catch((err) => {
            console.error(err)
            res.status(500).json(err)
        });
})
// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   try {
//     const whiteboardData = await req.body;

//     // Generate a unique filename and save the whiteboard data
//     const filename = `${Date.now()}.json`; // Or other suitable format
//     await fs.writeFile(`whiteboards/${filename}`, JSON.stringify(whiteboardData));

//     res.status(200).json({ message: 'Whiteboard content saved successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Error saving whiteboard content' });
//   }
// }

// module.exports = handler;
module.exports = router;