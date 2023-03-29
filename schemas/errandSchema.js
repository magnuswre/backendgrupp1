const mongoose = require('mongoose');
const Comment = require('../schemas/commentSchema')
const Status = require('../schemas/statusSchema')

const errandSchema = mongoose.Schema({
    email:          { type: String, required: true },
    subject:        { type: String, required: true },
    message:        { type: String, required: true },
    //Checka att Number och deafault är rätt.
    status:         { type: Number, ref: 'Status', default: 1 },
    comment:            [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
}, { timestamps: true })

module.exports = mongoose.model('Errand', errandSchema);