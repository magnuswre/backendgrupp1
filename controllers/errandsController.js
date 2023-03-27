const router = require('express').Router();
const errandModel = require('../models/errandModel')

//Controllers
router.post('/', errandModel.postErrand)
router.get('/', errandModel.getErrands)
router.get('/:id', errandModel.getOneErrand)
router.put('/:id', errandModel.changeErrand)


module.exports = router;