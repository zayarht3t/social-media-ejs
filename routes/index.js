const express = require('express');
const router = express.Router();
const indexController = require("../controllers/index")

router.get('/login',indexController.Login);

module.exports = router;