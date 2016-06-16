var express = require('express');
var router = express.Router();

var bcrypt = require('bcrypt');
const saltRounds = 10;

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var User = mongoose.model('user', {
    name: String,
    photo: String,
    password: String
});

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('respond with a resource');
});

router.post('/', function(req, res, next) {

    var user = req.body
    
    var salt = bcrypt.genSaltSync(saltRounds);
    user.password = bcrypt.hashSync(user.password, salt)

    //TODO: DB operating
    var newUser = new User(user);
    newUser.save(function(err,r) {
        console.log(r)
        if (err) {
            return res.status(400).send({ 'message': err });
        } else {
            return res.send({ 'message': 'success' });
        }
    });
    //create success

    //create fail


    // var salt = bcrypt.genSaltSync(saltRounds);
    // var hash = bcrypt.hashSync(passwordA, salt);
    // console.log(hash)

    // var success

    // success = bcrypt.compareSync(passwordA, hash)
    // console.log('passwordA' + success)

    // success = bcrypt.compareSync(passwordB, hash)
    // console.log('passwordB' + success)
})

router.put('/', function(req, res, next) {
    res.status(404).send('kerkekrker put');
})

module.exports = router;
