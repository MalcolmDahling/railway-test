const express = require('express');
const router = express.Router();

const TestModel = require('../models/TestModel');


router.get('/', async function(req, res, next) {
    
    let test = await TestModel.findOne({id:0});
    
    res.send(test);

});

module.exports = router;
