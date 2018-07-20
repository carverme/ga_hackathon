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
  res.redirect('/requests/match');
})

// GET /requests/new
router.get('/new', (req, res) => {
  res.render('requests/new')
})

// GET /requests/match
router.get('/match', (req, res) => {
  let data = JSON.parse(fs.readFileSync('./match.json'));
  let requests = data.filter(item => {
    if (item.request === true) {
      return item
    }
  })
  res.render('requests/match', {requests})
})

router.get('/match/show', (req, res) => {
  let details = {
    "id": "5b522734fc13ae53ed00000c",
    "company_name": "General Assembly",
    "name": "Anna Zocher",
    "address": "1217 3rd Ave",
    "email": "annazocher@generalassemb.ly",
    "phone": "(206) 436-5751",
    "meal_served": "Dinner",
    "can_transport": false,
    "details": "We have 14 lbs of untouched produce from a catered event",
  }
  res.render('requests/show', {details})
})

// GET /requests/:id
router.get('/:id', (req, res) => {
  let data = JSON.parse(fs.readFileSync('./data.json'));
  let request = _.find(data, () => {
    return data.id = req.params.id
  })
  res.render('request/show', {request})
})

module.exports = router;