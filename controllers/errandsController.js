const router = require('express').Router();
const errandModel = require('../models/errandModel')

//Controllers
router.post('/', errandModel.postErrand)
router.get('/', errandModel.getErrands)


module.exports = router;