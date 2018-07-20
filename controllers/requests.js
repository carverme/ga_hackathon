const express = require('express');
const router = express.Router();
const fs = require('fs');
const _ = require('lodash')

// GET /requests
router.get('/', (req, res) => {
  let data = JSON.parse(fs.readFileSync('./data.json'));
  let requests = data.filter( item => {
    if (item.request === true ) {
      return item
    }
  })
  res.render('requests/index', {requests});
})

// POST /requests
router.post('/', (req, res) => {
  var data = JSON.parse(fs.readFileSync('./data.json'));
  data.push(
    {
      id: "5b522734fc13ae53ed000" + 100 + data.length,
      company_name: req.body.company_name ,
      name: req.body.name ,
      address: req.body.address ,
      email: req.body.email ,
      phone: req.body.phone ,
      meal_served: req.body.meal_served ,
      can_transport: req.body.can_transport ,
      details: req.body.details ,
      request: req.body.request ,
    }
  );
  fs.writeFileSync('./data.json', JSON.stringify(data));
  res.redirect('/requests');
})

// GET /requests/new
router.get('/new', (req, res) => {
  res.render('requests/new')
})

// GET /requests/match
router.get('/match')

// GET /requests/:id
router.get('/:id', (req, res) => {
  let data = JSON.parse(fs.readFileSync('./data.json'));
  let request = _.find(data, () => {
    return data.id = req.params.id
  })
  res.render('request/show', {request})
})

module.exports = router;