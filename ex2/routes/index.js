var express = require('express');
var router = express.Router();
var axios = require('axios')

// GET /
router.get('/', function(req, res, next) {
  axios.get(process.env.API_URL + "/plantas")
    .then(response => {
      res.render('index', { list: response.data });
    })
    .catch(err => {
      res.render('error', {error: err})
    })
});

// GET /plantas/:id
router.get('/plantas/:id', function(req, res, next) {
  axios.get(process.env.API_URL + "/plantas/" + req.params.id)
    .then(response => {
      res.render('planta', { planta: response.data })
    })
    .catch(err => {
      res.render('error', {error: err})
    })
});

module.exports = router;
