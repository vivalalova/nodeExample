var express = require('express');
var router = express.Router();

var bcrypt = require('bcrypt');
const saltRounds = 10;
const passwordA = '12345678';
const passwordB = 'abcdefg';
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
    res.send('kerkekrker post');

    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(passwordA, salt);
    console.log(hash)
})

router.put('/', function(req, res, next) {
    res.status(404).send('kerkekrker put');
})

module.exports = router;
