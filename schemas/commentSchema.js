const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    email:          { type: String, required: true },
    message:        { type: String, required: true },
    caseId:        { type: String, required: true },
}, { timestamps: true })

module.exports = mongoose.model('Comment', commentSchema);