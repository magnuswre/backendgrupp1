const express = require('express');
const app = express();

require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/api/errands', require('./controllers/errandsController'))
app.use('/api/comments', require('./controllers/commentsController'))
app.use('/api/status', require('./controllers/statusController'))

module.exports = app;
