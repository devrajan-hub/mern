const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    await res.status(200).json([
      {
        name: 'Vinayak'
      },
      {
        name: 'Rajan'
      }
    ]);
  } catch (err) {}
});

module.exports = router;
