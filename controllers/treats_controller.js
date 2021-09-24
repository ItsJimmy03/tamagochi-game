const express = require("express");
const Treat = require("../models/treat");
const router = express.Router();




router.get('/', (req, res) => {
        Treat.grabTreats()
          .then(treats => res.json({treats}))
});

module.exports = router;