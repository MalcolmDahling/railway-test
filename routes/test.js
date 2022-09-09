const express = require('express');
const router = express.Router();




router.get('/', async function(req, res) {
    
    req.app.locals.db.collection('users').find().toArray()
        .then(result => {
            res.send(result);
        });

    

});

module.exports = router;
