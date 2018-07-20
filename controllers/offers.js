const express = require('express');
const router = express.Router();

// GET /offers
router.get('/', (req, res) => {
  // let offers = JSON.parse(fs.readFileSync(data));
  res.render('offers/index');

})

// POST /offers
router.post('/', (req, res) => {

})

// GET /offers/new
router.get('/:id', (req, res) => {
  res.render('offers/new')
})

// GET /offers/:id
router.get('/:id', (req, res) => {
  res.render('offers')
})

// PUT /offers/:id


// DELETE /offers/:id



module.exports = router;
