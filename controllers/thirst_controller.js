const express = require("express");
const Thirst = require("../models/thirst");
const router = express.Router();




router.get('/', (req, res) => {
        Thirst.grab_Thirst()
          .then(thirst => res.json({thirst}))
});

module.exports = router;


