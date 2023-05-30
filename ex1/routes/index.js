var express = require('express');
var router = express.Router();
var Plantas = require('../controllers/plantas');

router.get('/plantas/freguesias', (req, res, next) => {
  Plantas.freguesias()
  .then(data => res.jsonp(data))
  .catch(err => res.status(500).jsonp(err))
})


router.get('/plantas/especies', (req, res, next) => {
  Plantas.especies()
  .then(data => res.jsonp(data))
  .catch(err => res.status(500).jsonp(err))
})

router.get('/plantas/:id', (req, res, next) => {
  if(req.params.id) {
    Plantas.detail(req.params.id)
    .then(data => res.jsonp(data))
    .catch(err => res.status(500).jsonp(err))
  }
  else {
    next()
  }
})

// GET plantas?especie
router.get('/plantas', (req, res, next) => {
  if(req.query.especie) {
    Plantas.especies(req.query.especie)
    .then(data => res.jsonp(data))
    .catch(err => res.status(500).jsonp(err))
  }
  else {
    next()
  }
})

// GET plantas?implant
router.get('/plantas', (req, res, next) => {
  if(req.query.implant){
    Plantas.implant(req.query.implant)
    .then(data => res.jsonp(data))
    .catch(err => res.status(500).jsonp(err))
  }
  else {
    next()
  }
})

router.get('/plantas', (req, res, next) => {
  Plantas.list()
    .then(data => res.jsonp(data))
    .catch(err => res.status(500).jsonp(err))
})



router.post('/plantas', (req, res, next) => {
	  Plantas.insert(req.body)
	    .then(data => { res.jsonp(data) })
      .catch(err => res.status(500).jsonp(err))
})

router.delete('/plantas/:id', (req, res, next) => {
  Plantas.delete(req.params.id)
    .then(data => { res.jsonp(data) })
    .catch(err => res.status(500).jsonp(err))
})


module.exports = router;
