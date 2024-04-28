const express = require('express');
const router = express.Router();
const Model = require('../Models/lectureModel');
// import fs from 'fs/promises'; // For Node.js file system access

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

module.exports = router;