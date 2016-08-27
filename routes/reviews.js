var express = require('express');
var router = express.Router();
var mongoose= require('mongoose');

var Review=mongoose.model('Review');

router.get('/api/reviews', function(req, res, next) {

	User.find(function(err, users) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
            	res.send(err)

            res.json(users);
        });

});


	router.get('/api/reviews/:reviewid', function(req, res) {
		res.json(req.user);
	});

    /* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;