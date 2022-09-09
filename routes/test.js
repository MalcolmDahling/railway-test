const express = require('express');
const router = express.Router();

const TestModel = require('../models/TestModel');


router.get('/', async function(req, res, next) {
    

    try {
        let test = await TestModel.findOne({id:0});
        res.send(test.id);
    }
    
    catch (err) {
        console.log(err);
    }
  
});

module.exports = router;
