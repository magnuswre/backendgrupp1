const mongoose = require('mongoose');

const statusSchema = mongoose.Schema({
    _id:            { type: Number, required: true },
    message:        { type: String, required: true }
})

module.exports = mongoose.model('Status', statusSchema);