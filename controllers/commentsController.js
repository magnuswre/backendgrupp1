const router = require('express').Router();
const commentModel = require('../models/commentModel')

//Controllers
router.post('/', commentModel.postComment)
router.get('/', commentModel.getComments)


module.exports = router;