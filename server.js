const app = require('./app')
const mongoose = require('mongoose');
require('dotenv').config()

const PORT = process.env.PORT

app.listen(PORT, () => console.log('http//:localhost:' + PORT))

mongoose.connect(process.env.MONGO_URI)
    .then(console.log('DB connected'))
    .catch((err) => console.log(err))

