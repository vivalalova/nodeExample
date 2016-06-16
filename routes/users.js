var express = require('express');
var router = express.Router();

var bcrypt = require('bcrypt');
const saltRounds = 10;

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var User = mongoose.model('user', {
    name: {
        type: String,
        index: {
            unique: true
        }
    },
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
    newUser.save(function(err, r) {
        console.log(r)
        if (err) {
            return res.status(400).send({ 'message': err });
        }

        return res.send({ 'message': 'success' });
    });
})

router.put('/', function(req, res, next) {
    res.status(404).send('kerkekrker put');
})

router.post('/login', function(req, res, next) {
    // success = bcrypt.compareSync(passwordA, hash)
    // console.log('passwordA' + success)
    res.status(404).send('kerkekrker put');
})

module.exports = router;
