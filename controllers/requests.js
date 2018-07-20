const express = require('express');
const router = express.Router();

// GET /requests
router.get('/', (req, res) => {
  // let requests = JSON.parse(fs.readFileSync(data));
  res.render('/requests/index');

})

// POST /requests
router.post('/', (req, res) => {

})

// GET /requests/new
router.get('/:id', (req, res) => {
  res.render('/requests/new')
})

// GET /requests/:id
router.get('/:id', (req, res) => {
  res.render('/requests')
})

module.exports = router;