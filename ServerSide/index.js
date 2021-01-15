const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    console.log(req);
    res.send({title: 'Server\'s Response'});
});

module.exports = router;