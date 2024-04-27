const express = require('express');
const router = express.Router();
const Model = require('../Models/teacherModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

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
    Model.findOne(req.body)
        // for generation JWT required 4 things 1 payload 2
        .then((result) => {
            if (result) {
                // console.log(result);
                const { _id, teachername, email, avatar } = result;
                const payload = { _id, teachername, email };
                jwt.sign
                    (
                        payload,
                        process.env.JWT_SECRET,
                        { expiresIn: '2 days' },
                        (err, token) => {
                            // console.log(token);
                            if (err) {
                                console.log(err);
                                res.status(500).json({ message: 'error creating token' })
                            } else {
                                res.status(200).json({ token, avatar, teachername })
                            }
                        }
                    )

            } else {
                res.status(401).json({ message: 'Invalid Credentials' })
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

module.exports = router;