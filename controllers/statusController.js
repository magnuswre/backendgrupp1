const router = require('express').Router();
const statusModel = require('../models/statusModel')

//Controllers
router.post('/', statusModel.postStatus)
router.get('/', statusModel.getStatuses)


module.exports = router;