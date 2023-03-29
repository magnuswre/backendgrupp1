const mongoose = require('mongoose');

const commentSchema = mongoose.Schema({
    email:          { type: String, required: true },
    message:        { type: String, required: true },
    caseId:        { type: mongoose.Schema.Types.ObjectId, ref: 'Errand' },
}, { timestamps: true })

module.exports = mongoose.model('Comment', commentSchema);