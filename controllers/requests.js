const express = require('express');
const router = express.Router();
const fs = require('fs');
// const data = require('../data/data.json');

// GET /requests
router.get('/', (req, res) => {
  let requests = JSON.parse(fs.readFileSync('./data.json'));
  res.json(requests);

})

// POST /requests
router.post('/', (req, res) => {

})

// GET /requests/new
router.get('/:id', (req, res) => {
  res.render('requests/new')
})

// GET /requests/:id
router.get('/:id', (req, res) => {
  res.render('requests')
})

module.exports = router;