var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
    res.send('kerkekrker post');
})

router.put('/', function(req, res, next) {
    res.send(404,'kerkekrker put');
})

module.exports = router;
