const express = require('express');
const router = express.Router();

// Route utama
router.get('/', (req, res) => {
  res.send('Hello, World!');
});

module.exports = router;
