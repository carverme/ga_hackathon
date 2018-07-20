const express = require('express');
const router = express.Router();
const fs = require('fs');
const _ = require('lodash')

// GET /offers
router.get('/', (req, res) => {
  let data = JSON.parse(fs.readFileSync('./data.json'));
  let offers = data.filter(item => {
    if (item.request === false) {
      return item
    }
  })
  res.render('offers/index', {offers});

})

// POST /offers
router.post('/', (req, res) => {
  var data = JSON.parse(fs.readFileSync('./data.json'));
  data.push(
    {
      id: "5b522734fc13ae53ed000" + 100 + data.length,
      company_name: req.body.company_name,
      name: req.body.name,
      address: req.body.address,
      email: req.body.email,
      phone: req.body.phone,
      meal_served: req.body.meal_served,
      can_transport: req.body.can_transport,
      details: req.body.details,
      request: req.body.request,
    }
  );
  fs.writeFileSync('./data.json', JSON.stringify(data));
  res.redirect('/data');
})

// GET /offers/new
router.get('/:id', (req, res) => {
  res.render('offers/new')
})

// GET /offers/:id
router.get('/:id', (req, res) => {
  let data = JSON.parse(fs.readFileSync('./data.json'));
  let offer = _.find(data, () => {
    return data.id = req.params.id
  })
  res.render('offers/show', { offer })
})

// PUT /offers/:id

// DELETE /offers/:id



module.exports = router;
