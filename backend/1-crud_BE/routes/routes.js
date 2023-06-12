const express = require('express');
const router = express.Router()
const Model = require('../models/model');

router.post('/post', async (req, res) => {
    console.log(req.body);
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

   try {
        const dataToSave = await Model.create({
            name: req.body.name,
            age: req.body.age
        });
        console.log(dataToSave);
        res.status(200).json(dataToSave)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
})

router.get('/getAll', (req, res) => {
    res.send('get All API')
})

router.get('/getOne/:id', (req, res) => {
    res.send(req.params.id)
})

router.patch('/update/:id', (req, res) => {
    res.send('Update by id API')
})

router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})

module.exports = router;
