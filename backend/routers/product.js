const express = require('express');
const router = express.Router();
const Model = require('../models/product');


router.post('/add', (req,res)  => {
    console.log(req.body)
    // storing data to mogoDB
    //to add the data in database
    new Model(req.body). save()
    .then((result) => {
        res.json(result)
        
    }).catch((err) => {
        console.log(err)
        res.status(500).json({error: 'Internal Server Error'})
        
    });
})

router.get('/getall',(req,res) => {
    //empty bracket means get all data
    Model.find()
    .then((result) => {
        res.json(result)
        
    }).catch((err) => {
        console.log(err)
        res.status(500).json({error: 'Internal Server Error'})
        
    });
})



router.get('/getbyid/:id', (req,res) => 
    {
        Model.findById(req.params.id)
        .then((result) => {
            res.json(result)
            
        }).catch((err) => {
            console.log(err)
            res.status(500).json({error: 'Internal Server Error'})
    
            
        });
    })
    

    router.get('/getbyemail/:email', (req,res) => 
        {
            Model.find({email: req.params.email})
            .then((result) => {
                res.json(result)
                
            }).catch((err) => {
                console.log(err)
                res.status(500).json({error: 'Internal Server Error'})
        
                
            });
        })


module.exports = router;